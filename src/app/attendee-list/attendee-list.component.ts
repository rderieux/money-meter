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

  attendees: Observable<List<Attendee>>;
  selectedAttendee: Attendee;

  constructor(private attendeeService: AttendeeService) {
  }

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

  onAttendeeChanged(attendee) {
    if(attendee) {
      this.attendeeService.saveAttendee(attendee);
    }
    this.selectedAttendee = null;
  }
}
