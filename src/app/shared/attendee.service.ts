import { Injectable } from '@angular/core';
import Attendee from './attendee';

@Injectable()

export default class AttendeeService {
  getAttendees():Attendee[] {
    return [
      new Attendee(11, 'Software Developer', 80000),
      new Attendee(12, 'Software Tester', 50000)
    ];
  }
}
