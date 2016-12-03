import { Component, OnInit } from '@angular/core';
import Attendee from '../shared/attendee';
import AttendeeService from '../shared/attendee.service';
import {Observable} from "rxjs";
import { List } from 'immutable';

@Component({
  selector: 'app-meeting-attendees',
  templateUrl: './meeting-attendees.component.html',
  styleUrls: ['./meeting-attendees.component.css']
})
export class MeetingAttendeesComponent implements OnInit {

  attendees: Observable<List<Attendee>>;
  selectedAttendee: Attendee;

  constructor(private attendeeService: AttendeeService) { }

  ngOnInit() {
    this.attendees = this.attendeeService.attendees;
  };

  onAttendeeSelected(attendee:Attendee) {
    this.selectedAttendee = attendee;
  };

  onAttendeeDelete(attendee: Attendee) {
    this.attendeeService.deleteAttendee(attendee);
  };

  onAttendeeAdd() {
    this.selectedAttendee = new Attendee('', 0);
  };

  onSaveClicked() {
    this.attendeeService.saveAttendee(this.selectedAttendee);
    this.selectedAttendee = null;
  };

  onCloseClicked() {
    this.selectedAttendee = null;
  };

}
