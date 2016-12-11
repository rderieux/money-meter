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

  constructor(private http: Http) {
    this.loadInitialData();
  }

  get attendees() {
    return this._attendees.asObservable();
  }

  loadInitialData() {
    this.http.get(ATTENDEE_URI)
      .subscribe(res => {
        let attendees = (<Object[]>res.json()).map((attendee: any) => {
          let newAttendee = new Attendee(attendee.role, attendee.salary);
          newAttendee._id = attendee._id;
          return newAttendee;
          });
        this._attendees.next(List(attendees));
      }, error => console.log('Could not load attendees'));
  }

  saveAttendee(attendee) {
    const attendeeCopy = JSON.parse(JSON.stringify(attendee));
    if (!attendee._id) {
      this.addAttendee(attendeeCopy);
    } else {

      let id = attendeeCopy._id;
      delete attendeeCopy._id;

      this.updateAttendee(id, attendeeCopy);
    }
  }

  private addAttendee(addedAttendee) {
    let obs = this.http.post(ATTENDEE_URI, addedAttendee);

    obs.subscribe(
      res => {
        this._attendees.next(this._attendees.getValue().push(res.json()));
      });
  }

  private updateAttendee(id, updatedAttendee) {
    this.http.put(`${ATTENDEE_URI}/${id}`,
      updatedAttendee).toPromise().then(() => {
        this.loadInitialData();
    });
  }

  deleteAttendee(deleted:Attendee) {
    let obs:Observable<any> = this.http.delete(`${ATTENDEE_URI}/${deleted._id}`);

    obs.subscribe(
      res => {
        let attendees: List<Attendee> = this._attendees.getValue();
        let index = attendees.findIndex((attendee) => attendee._id === deleted._id);
        this._attendees.next(attendees.delete(index));
      }
    );
  }

}
