import {Injectable, EventEmitter} from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';

import Attendee from './attendee';

@Injectable()
export default class AttendeeService {

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
    return this.http.get('http://localhost:4000/attendees').map(res => res.json())
      .subscribe(data => {
        this.dataStore.attendees = data;
        this._attendees.next(Object.assign({}, this.dataStore).attendees);
        this.rateChanged.emit();
      }, error => console.log('Could not load attendees'));
  }
}
