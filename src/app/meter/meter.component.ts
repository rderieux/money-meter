import { Component, OnInit } from '@angular/core';
import Attendee from '../shared/attendee';
import AttendeeService from '../shared/attendee.service';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.css'],
})
export class MeterComponent implements OnInit {

  meterValue = 0;
  refreshInterval = 100;
  intervalID;
  attendees: Attendee[];

  constructor(public attendeeService: AttendeeService) { }
//TODO change the this. stuff to the mongodb
  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
    }
  }

  //TODO move calculate to attendee changed event
  onStartClick() {
    this.intervalID = setInterval(() => {
      this.meterValue += this.attendeeService.intervalRate;
    }, this.refreshInterval);
  };

  onStopClick() {
    clearInterval(this.intervalID);
  }

  onResetClick() {
    this.meterValue = 0;
  }
}
