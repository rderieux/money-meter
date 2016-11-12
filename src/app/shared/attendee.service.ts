import { Injectable } from '@angular/core';
import Attendee from './attendee';

import { Http } from '@angular/http';

@Injectable()

export default class AttendeeService {
  constructor(private http: Http) {}
  getAttendees(): Promise<Attendee[]> {
    return this.http.get('http://localhost:4000/attendees')
      .toPromise()
      .then(response => response.json()as Attendee[]);
  }
}
