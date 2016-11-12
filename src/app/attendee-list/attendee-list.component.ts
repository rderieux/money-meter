import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import Attendee from '../shared/attendee';
import AttendeeService from '../shared/attendee.service';
import {Observable} from "rxjs";



@Component({
  selector: 'app-attendee-list',
  templateUrl: './attendee-list.component.html',
  styleUrls: ['./attendee-list.component.css']
})
export class AttendeeListComponent implements OnInit {

  attendees: Observable<Attendee[]>;
  selectedAttendee: Attendee;

  constructor(public attendeeService: AttendeeService) {
  }

  ngOnInit() {
    this.attendees = this.attendeeService.attendees;
    this.attendeeService.getAttendees();
  }

  onAttendeeSelected(attendee: Attendee) {
    this.selectedAttendee = attendee;
  }

  onCloseClicked() {
    this.selectedAttendee = null;
  }
}
