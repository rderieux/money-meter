import {Component, OnInit} from '@angular/core';
import Attendee from '../shared/attendee';
import AttendeeService from '../shared/attendee.service';
import {Observable} from "rxjs";
import { List } from 'immutable';

@Component({
  selector: 'app-attendee-list',
  templateUrl: './attendee-list.component.html',
  styleUrls: ['./attendee-list.component.css']
})
export class AttendeeListComponent implements OnInit {

  attendees: AttendeeService;
  selectedAttendee: Attendee;

  constructor(private attendeeService: AttendeeService) { }

  ngOnInit() {
   this.attendees = this.attendeeService.attendees;
  }

  //TODO handle a selected attendee being modified without save/close
  onAttendeeSelected(attendee: Attendee) {
    this.selectedAttendee = attendee;
  }

  onAttendeeDelete(attendee: Attendee) {
    this.attendeeService.deleteAttendee(attendee);
  }

  onAttendeeAdd() {
    this.selectedAttendee = new Attendee('', 0);
  }

  onSaveClicked() {
    this.attendeeService.saveAttendee(this.selectedAttendee);
    this.selectedAttendee = null;
  }

  //TODO handle a two way binding change without save click
  onCloseClicked() {
    this.selectedAttendee = null;
  }
}
