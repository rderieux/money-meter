import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.css'],
})
export class MeterComponent implements OnInit {

  meterValue = 0;
  meterRate = 0;
  intervalID;
  started = false;

  refreshInterval = 100;
  timer = 0 //TODO turn timer into a DDL to choose interval

  constructor() { }
  ngOnInit() { }

  ngOnDestroy() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
    }
  }

  onStartClick() {
    if(this.intervalID && this.started)
      return;

    this.intervalID = setInterval(() => {
      this.started = true;
      this.meterValue += this.meterRate;
      this.timer += .1;
    }, this.refreshInterval);
  };

  onStopClick() {
    clearInterval(this.intervalID);
    this.started = false;
  }

  onResetClick() {
    this.onStopClick();
    this.meterValue = 0;
    this.timer = 0;
  }

  onRateChanged(event) {
    this.meterRate = event;
  }
}
