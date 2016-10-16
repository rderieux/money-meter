import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.css']
})
export class MeterComponent implements OnInit {

  meterValue = 0;
  meterRate = 157;
  refreshInterval = 1000;
  intervalID;
  attendeeList = [];

  // TODO Add time travel
  // meterStart = new Date();
  // meterEnd = null;

  constructor() { }

  ngOnInit() {

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
    for (var i = 0; i < this.attendeeList.length; i++) {
      newMeterRate += this.attendeeList[i][0] * this.attendeeList[i][1];
    }
    this.meterRate = newMeterRate;
  }

  onAddAttendeeClick(salary, count) {
    this.attendeeList.push([salary, count])
    this.calcMeterRate();
  }

}
