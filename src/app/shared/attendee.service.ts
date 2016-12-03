import { Injectable } from '@angular/core';
import Attendee from './attendee';
import { List } from 'immutable';

import 'rxjs/add/operator/toPromise';

import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';

const ATTENDEE_URI = 'http://localhost:4000/attendees';

@Injectable()
export default class AttendeeService {

  //don't expose Subject directly to store clients
  private _attendees: BehaviorSubject<List<Attendee>>
    = new BehaviorSubject(List([]));

  // rateChanged = new EventEmitter();

  constructor(private http: Http) {
    this.loadInitialData();
  }

  get attendees() {
    return this._attendees.asObservable();
  }

  get meterRate() {
    return (<any>this._attendees).getValue()
      .map(attendee => attendee.salary)
      .reduce((previous, current) => parseInt(previous) + parseInt(current), 0)
  }

  get intervalRate() {
    return this.meterRate / 2080 / 60 / 60 / 10;
  }

  loadInitialData() {
    this.http.get(ATTENDEE_URI)
      .subscribe(res => {
        let attendees = (<Object[]>res.json()).map((attendee: any) => {
          var newAttendee = new Attendee(attendee.role, attendee.salary);
          newAttendee._id = attendee._id;
          return newAttendee;
          });
        this._attendees.next(List(attendees));
      }, error => console.log('Could not load attendees'));
  }

  // getAttendee(id): Promise<Attendee> {
  //   return this.http.get(`${ATTENDEE_URI}/${id}`)
  //     .toPromise()
  //     .then(response => response.json() as Attendee);
  // }

  saveAttendee(attendee) {
    const attendeeCopy = JSON.parse(JSON.stringify(attendee));
    if (!attendee._id) {
      return this.addAttendee(attendeeCopy);
    } else {

      var id = attendeeCopy._id;
      delete attendeeCopy._id;

      return this.updateAttendee(id, attendeeCopy);
    }
  }

  private addAttendee(addedAttendee) {
    let obs = this.http.post(ATTENDEE_URI, addedAttendee);

    obs.subscribe(
      res => {
        this._attendees.next(this._attendees.getValue().push(res.json()));
      });

    return obs;
  }

  private updateAttendee(id, updatedAttendee) {
    let obs = this.http.put(`${ATTENDEE_URI}/${id}`,
      updatedAttendee).share();

    obs.subscribe(
      res => {
        let attendees = this._attendees.getValue();
        let index = attendees.findIndex((attendee: Attendee) =>
          attendee._id === updatedAttendee._id);
        let attendee:Attendee = attendees.get(index);
        var newAttendee = new Attendee(attendee.role, attendee.salary);
        newAttendee._id = attendee._id;
        this._attendees.next(attendees.set(index, newAttendee));
      }
    )

    return obs;
  }

  deleteAttendee(deleted:Attendee) {
    let obs:Observable<any> = this.http.delete(`${ATTENDEE_URI}/${deleted._id}`).share();

    obs.subscribe(
      res => {
        let attendees: List<Attendee> = this._attendees.getValue();
        let index = attendees.findIndex((attendee) => attendee._id === deleted._id);
        this._attendees.next(attendees.delete(index));
      }
    );

    return obs;
  }

}
