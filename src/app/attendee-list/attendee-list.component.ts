import { Component, OnInit } from '@angular/core';
import Attendee from '../shared/attendee';
import AttendeeService from '../shared/attendee.service';

@Component({
  selector: 'app-attendee-list',
  templateUrl: './attendee-list.component.html',
  styleUrls: ['./attendee-list.component.css']
})
export class AttendeeListComponent implements OnInit {

  attendees: Attendee[];
  selectedAttendee: Attendee;

  constructor(public attendeeService: AttendeeService) {

  }

  ngOnInit() {
    this.attendees = this.attendeeService.getAttendees();
  }

  onAttendeeSelected(attendee: Attendee) {
    this.selectedAttendee = attendee;
  }

}
