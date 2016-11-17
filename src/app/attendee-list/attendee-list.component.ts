import {Component, OnInit} from '@angular/core';
import Attendee from '../shared/attendee';
import AttendeeService from '../shared/attendee.service';
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-attendee-list',
  templateUrl: './attendee-list.component.html',
  styleUrls: ['./attendee-list.component.css']
})
export class AttendeeListComponent implements OnInit {

  attendees: Observable<Attendee[]>;
  selectedAttendee: Attendee;

  constructor(public attendeeService: AttendeeService, public router: Router) { }

  ngOnInit() {
    this.attendees = this.attendeeService.attendees;
    this.attendeeService.getAttendees();
  }

  onAttendeeSelected(attendee: Attendee) {
    this.selectedAttendee = attendee;
  }

  onAttendeeDelete(attendee: Attendee) {
    this.attendeeService.remove(attendee._id);
  }

  onAttendeeAdd() {
    this.selectedAttendee = new Attendee('', 0);
  }

  onSaveClicked() {
      this.attendeeService.save(this.selectedAttendee);
  }

  onCloseClicked() {
    this.selectedAttendee = null;
  }
}
