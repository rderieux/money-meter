import {Injectable, EventEmitter} from '@angular/core';
import Attendee from './attendee';

import 'rxjs/add/operator/toPromise';

import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';

const ATTENDEE_URI = 'http://localhost:4000/attendees';

@Injectable()
export default class AttendeeService {

// <<<<<<< HEAD
//   constructor(public http: Http) {}
//
//   getAttendees(): Promise<Attendee[]> {
//     return this.http.get(ATTENDEE_URI)
//       .toPromise()
//       .then(response => response.json()as Attendee[]);
// =======
  private _attendees: BehaviorSubject<Attendee[]>;

  //made public to allow for unit testing
  public dataStore: {
    attendees: Attendee[]
  };

  rateChanged = new EventEmitter();

  constructor(private http: Http) {
    this.dataStore = { attendees: [] };
    this._attendees = <BehaviorSubject<Attendee[]>>new BehaviorSubject([]);
  }

  get attendees() {
    return this._attendees.asObservable();
  }

  get meterRate() {
    return this.dataStore.attendees.map(attendee => attendee.salary)
      .reduce((previous, current) => previous + current, 0);
  }

  get intervalRate() {
    return this.meterRate / 2080 / 60 / 60 / 10;
  }

  getAttendees() {
    return this.http.get(ATTENDEE_URI).map(res => res.json())
      .subscribe(data => {
        this.dataStore.attendees = data;
        this._attendees.next(Object.assign({}, this.dataStore).attendees);
        this.rateChanged.emit();
      }, error => console.log('Could not load attendees'));
  }

  getAttendee(id): Promise<Attendee> {
    return this.http.get(`${ATTENDEE_URI}/${id}`)
      .toPromise()
      .then(response => response.json() as Attendee);
  }

  save(attendee: Attendee): Promise<Attendee> {

    const attendeeCopy= JSON.parse(JSON.stringify(attendee));

    if (!attendee._id) {
      return this.http.post(ATTENDEE_URI, attendeeCopy)
        .toPromise()
        .then(response => response.json() as Attendee)
    } else {
      if (attendeeCopy._id) {
        delete attendeeCopy._id;
      }

      if (attendeeCopy.attendee_id) {
        delete attendeeCopy.attendee_id;
      }

      return this.http.put(`${ATTENDEE_URI}/${attendee._id}`, attendeeCopy)
        .toPromise()
        .then(response => response.json());
    }
  }

  remove(id) {
    return this.http.delete(`${ATTENDEE_URI}/${id}`)
      .toPromise()
      .then(response => response.json())
  }

}
