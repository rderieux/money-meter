import { Component, OnInit } from '@angular/core';
// import { Input, trigger, state, style, transition, animate } from '@angular/core';

import Attendee from '../shared/attendee';
import AttendeeService from '../shared/attendee.service';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.css'],
  // animations: [
  // trigger('counter', [
  //   state('inactive', style({
  //     backgroundColor: '#eee',
  //     transform: 'scale(1)'
  //   })),
  //   state('active', style({
  //     backgroundColor: '#cfd8dc',
  //     transform: 'scale(1.1)'
  //   })),
  //   transition('inactive => active', animate('100ms ease-in')),
  //   transition('active => inactive', animate('100ms ease-out'))
  // ])
  // ]
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
//TODO change the this. stuff to the mongodb
  ngOnInit() {
    this.attendeeService.getAttendees()
      .then((attendees) => {
        this.attendees = attendees;
        this.calcMeterRate();

      });
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
    this.meterRate = newMeterRate / 2080 / 60 / 60;
  }

  // onAddAttendeeClick(role, salary, count) {
  //   for(var i = 0; i < count; i++) {
  //     this.attendees.push(new Attendee(1, role, salary));
  //   };
  //   this.calcMeterRate();
  // }

}
