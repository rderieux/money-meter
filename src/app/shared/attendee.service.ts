import { Injectable } from '@angular/core';
import Attendee from './attendee';

import 'rxjs/add/operator/toPromise';

import { Http } from '@angular/http';

const ATTENDEE_URI = 'http://localhost:4000/attendees';

@Injectable()

export default class AttendeeService {

  constructor(public http: Http) {}

  getAttendees(): Promise<Attendee[]> {
    return this.http.get(ATTENDEE_URI)
      .toPromise()
      .then(response => response.json()as Attendee[]);
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
