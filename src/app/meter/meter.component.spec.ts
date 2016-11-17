/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MeterComponent } from './meter.component';
import AttendeeService from '../shared/attendee.service';
import Attendee from '../shared/attendee';

describe('Component: Meter', () => {
  it('should create an instance', () => {
    let component = new MeterComponent(new AttendeeService(null));
    expect(component).toBeTruthy();
    component.attendeeService.dataStore.attendees = [
      new Attendee('dev', 100000),
      new Attendee('dev', 110000),
      new Attendee('dev', 120000),
      new Attendee('dev', 130000),
    ];
    // component.meterInit();
    // component.meterInit();
    // component.meterInit();
    // expect(component.onStartClick).toHaveBeenCalledTimes(100);
    // var $intervalSpy = jasmine.createSpy('$interval', component.meterInit)

  });
});
