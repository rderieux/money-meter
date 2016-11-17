<<<<<<< HEAD
import {Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

=======
import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
>>>>>>> master
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

  constructor(public attendeeService: AttendeeService, public route: ActivatedRoute, public router: Router, public restaurantService: AttendeeService) { }

  ngOnInit() {
<<<<<<< HEAD
    this.attendeeService.getAttendees()
      .then((attendees) => {
        this.attendees = attendees;
      });
  };
=======
    this.attendees = this.attendeeService.attendees;
    this.attendeeService.getAttendees();
  }
>>>>>>> master

  onAttendeeSelected(attendee: Attendee) {
    this.selectedAttendee = attendee;
  }

  onAttendeeDelete(attendee: Attendee) {
    const { _id } = attendee;

    this.attendeeService.remove(_id)
      .then(result => {
        this.router.navigate([ '/attendees' ])
      });
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
