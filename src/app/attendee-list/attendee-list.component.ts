import { Component, OnInit, OnDestroy } from '@angular/core';
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
    this.attendeeService.getAttendees()
      .then((attendees) => {
        this.attendees = attendees;
      });
  }

  onAttendeeSelected(attendee: Attendee) {
    this.selectedAttendee = attendee;
  }

  onCloseClicked() {
    this.selectedAttendee = null;
  }

  // onAttendeeChanged(event) {
  //   debugger;
  //   this.selectedAttendee = event;
    // for(let i = 0; i < this.attendees.length; i++) {
    //   let attendee = this.attendees[i];
    //   if(attendee.id === event.id){
    //     attendee = event;
    //     break;
    //   }
    // }
  // }

}
