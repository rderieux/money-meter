import { Component, OnInit } from '@angular/core';
import Attendee from '../shared/attendee';
import AttendeeService from '../shared/attendee.service';
import {Observable} from "rxjs";
import { List, Map } from 'immutable';

@Component({
  selector: 'app-meeting-attendees',
  templateUrl: './meeting-attendees.component.html',
  styleUrls: ['./meeting-attendees.component.css']
})
export class MeetingAttendeesComponent implements OnInit {

  attendees: Observable<List<Attendee>>;
  selectedMeetingAttendee: Attendee;
  selectedAttendee: Attendee;
  meetingAttendees: any;
  testAttendees: Array<any>;

  constructor(private attendeeService: AttendeeService) { }

  ngOnInit() {
    this.attendees = this.attendeeService.attendees;
    this.meetingAttendees = {};
    this.testAttendees = new Array();
  };

  onAttendeeSelected(attendee:Attendee) {
    this.selectedAttendee = attendee;
  };

  // TODO refactor DRY with attendeeAdd
  onMeetingAttendeeAdd(value) {
    this.meetingAttendees[value.attendee._id].quantity += 1;
    var temp = this.meetingAttendees;
    this.testAttendees = Object.keys(temp)
      .map(function(k) { return temp[k] });
  }

    onAttendeeAdd() {
    debugger;
    var value = this.meetingAttendees[this.selectedMeetingAttendee._id];
    if(value) {
      value.quantity += 1;
    } else {
      this.meetingAttendees[this.selectedMeetingAttendee._id] = {
        attendee: this.selectedMeetingAttendee, quantity: 1}
    }
    var temp = this.meetingAttendees;
    this.testAttendees = Object.keys(temp)
      .map(function(k) { return temp[k] });
  }

  //TODO refactor dry with attendee subtract
  onMeetingAttendeeSubtract(value) {
    if(value && value.quantity > 1) {
      value.quantity -= 1;
    } else if (value || value.quantity === 1) {
      delete this.meetingAttendees[value.attendee._id];
    }
    var temp = this.meetingAttendees;
    this.testAttendees = Object.keys(temp)
      .map(function(k) { return temp[k] });
  }

  onMeetingAttendeeDelete(value) {
    delete this.meetingAttendees[value.attendee._id];
    var temp = this.meetingAttendees;
    this.testAttendees = Object.keys(temp)
      .map(function(k) { return temp[k] });
  }

  onAttendeeSubtract() {
    var value = this.meetingAttendees[this.selectedMeetingAttendee._id];
    if(value && value.quantity > 1) {
      value.quantity -= 1;
    } else if (value || value.quantity === 1) {
      delete this.meetingAttendees[this.selectedMeetingAttendee._id];
    } else {
      return;
    }
    var temp = this.meetingAttendees;
    this.testAttendees = Object.keys(temp)
      .map(function(k) { return temp[k] });
  }



}
