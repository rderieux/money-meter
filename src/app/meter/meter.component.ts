import {Component, OnInit} from '@angular/core';
import Attendee from '../shared/attendee';
import AttendeeService from '../shared/attendee.service';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.css']
})
export class MeterComponent implements OnInit {

  meterValue = 0;
  meterRate = 0;
  refreshInterval = 1000;
  intervalID;
  attendees: Attendee[];

  // TODO Add time travel
  // meterStart = new Date();
  // meterEnd = null;

  constructor(public attendeeService: AttendeeService) { }

  ngOnInit() {
    this.attendees = this.attendeeService.getAttendees();
    this.calcMeterRate();
  }

  ngOnDestroy() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
    }
  }

  meterInit() {
    this.meterValue += this.meterRate;
  }

  onStartClick() {
    this.intervalID = setInterval(() => {
      this.meterInit();
    }, this.refreshInterval);
  };

  onStopClick() {
    clearInterval(this.intervalID);
  }

  calcMeterRate() {
    var newMeterRate = 0;
    for (var i = 0; i < this.attendees.length; i++) {
      newMeterRate += Number(this.attendees[i].salary);
    };
    this.meterRate = newMeterRate;
  }

  onAddAttendeeClick(role, salary, count) {
    for(var i = 0; i < count; i++) {
      this.attendees.push(new Attendee(1, role, salary));
    };
    this.calcMeterRate();
  }
}
