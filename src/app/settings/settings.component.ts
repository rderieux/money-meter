import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import Attendee from '../shared/attendee';
import AttendeeService from '../shared/attendee.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  // attendees: Attendee[];
  // selectedAttendee: Attendee;

  constructor(
    // public router: Router,
    // public attendeeService: AttendeeService
  ) {}

  getAttendees(): void {
    // this.attendeeService.getAttendees();
      // .then(attendees => this.attendees = attendees);
  }

  ngOnInit(): void {
    // this.getAttendees();
  }



  //TODO add and remove from attendee service
// save(): void {
//   this.attendeeService.update(this.attendees)
//     .then(() => goBack());
// }
//
// goBack(): void {
//   this.location.back();
// }
}
