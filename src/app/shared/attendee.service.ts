import {Injectable, EventEmitter} from '@angular/core';
import Attendee from './attendee';
import { List } from 'immutable';
import { UUID } from 'angular2-uuid';

import 'rxjs/add/operator/toPromise';

// import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';

// const ATTENDEE_URI = 'http://localhost:4000/attendees';
const ATTENDEE_KEY = 'attendees';

@Injectable()
export default class AttendeeService {

  //don't expose Subject directly to store clients
  // private _attendees: BehaviorSubject<Attendee[]>;
  private _attendees: BehaviorSubject<List<Attendee>>
    = new BehaviorSubject(List([]));

  private saveToLocalStorage(attendees) {
    localStorage.setItem(ATTENDEE_KEY, JSON.stringify(attendees));
  };

  private loadFromLocalStorage() {
    const attendees = localStorage.getItem(ATTENDEE_KEY);

    if(!attendees) {
      return [];
    } else {
      return JSON.parse(attendees)
    }
  };

  //made public to allow for unit testing
  // public dataStore: {
  //   attendees: Observable<Attendee[]>;
  // };

  rateChanged = new EventEmitter();

  constructor() {
    // this.dataStore = { attendees: [] };
    // this._attendees = <BehaviorSubject<Attendee[]>>new BehaviorSubject([]);
    this.loadInitialData();
  }

  get attendees(): any[] {

    return this.loadFromLocalStorage();
    // return this._attendees.asObservable();
  }

  get meterRate() {
    return 100;
    // return this.attendees.map(attendee => attendee.salary)
    //   .reduce((previous, current) => previous + current, 0);
  }

  get intervalRate() {
    return this.meterRate / 2080 / 60 / 60 / 10;
  }

  loadInitialData() {
    this.loadFromLocalStorage().get(ATTENDEE_KEY)
      .subscribe(res => {
        let attendees = (<Object[]>res.json()).map((attendee:any = {}) => {
          let newAttendee = new Attendee(attendee.role, attendee.salary);
          newAttendee.id = attendee._id;
          return newAttendee;
          });
        this._attendees.next(List(attendees));

        // this.dataStore.attendees = data;
        // this._attendees.next(Object.assign({}, this.dataStore).attendees);
        // this.rateChanged.emit();
      }, error => console.log('Could not load attendees'));
  }

  getAttendee(id): Promise<Attendee> {
    return this.loadFromLocalStorage().get(`${ATTENDEE_KEY}/${id}`)
      .toPromise()
      .then(response => response.json() as Attendee);
  }

  // saveAttendee(attendee:any = {}): void {
  //   const attendees = this.loadFromLocalStorage();
  //   attendee.id = attendee.id || UUID.UUID();
  //   attendees.push(attendee);
  //
  //   this.saveToLocalStorage(attendees);
  // }
  //
  // deleteAttendee(id): void {
  //   const attendees = this.loadFromLocalStorage()
  //     .filter(attendee => attendee.id != id);
  //   this.saveToLocalStorage(attendees);
  // }

  saveAttendee(attendee) {
    const attendeeCopy = this.loadFromLocalStorage();
    if (!attendee.id) {
      return this.addAttendee(attendeeCopy);
    } else {

      let id = attendeeCopy.id;
      delete attendeeCopy.id;

      return this.updateAttendee(id, attendeeCopy);
    }
  }

  private addAttendee(attendee:any = {}): void {
    let obs = this.loadFromLocalStorage().push(attendee);
    attendee.id = attendee.id || UUID.UUID();
    this.attendees.push(attendee);


    obs.subscribe(
      res => {
        this.saveToLocalStorage(attendee);
      });

    return obs;
  }

  private updateAttendee(id, updatedAttendee) {
    debugger;
    let obs = this.loadFromLocalStorage().push(
      updatedAttendee).share();

    obs.subscribe(
      res => {
        let attendees = this._attendees.getValue();
        let index = attendees.findIndex((attendee: Attendee) =>
          attendee.id === updatedAttendee._id);
        let attendee:Attendee = attendees.get(index);
        let newAttendee = new Attendee(attendee.role, attendee.salary);
        newAttendee.id = attendee.id;
        this._attendees.next(attendees.set(index, newAttendee));
      }
    );

    return obs;
  }

  deleteAttendee(deleted:Attendee) {
    let obs:Observable<any> = this.loadFromLocalStorage().delete(`${ATTENDEE_KEY}/${deleted.id}`).share();

    obs.subscribe(
      res => {
        let attendees: List<Attendee> = this._attendees.getValue();
        let index = attendees.findIndex((attendee) => attendee.id === deleted.id);
        this._attendees.next(attendees.delete(index));
      }
    );

    return obs;
  }

}
