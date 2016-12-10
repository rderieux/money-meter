import { TestBed, async } from '@angular/core/testing';
import AttendeeService from './attendee.service';
import Attendee from "./attendee";

describe('Service: Meter Rate', () => {
  it('calculates interval rate properly', () => {
    let service = new AttendeeService(null);
    expect(service).toBeTruthy();
  });
});
