import { TestBed, async } from '@angular/core/testing';
import AttendeeService from './attendee.service';
import Attendee from "./attendee";

describe('Service: Meter Rate', () => {
  it('calculates interval rate properly', () => {
    let service = new AttendeeService(null);
    expect(service).toBeTruthy();
    service._attendees..attendees = [
      new Attendee('dev', 100000),
      new Attendee('dev', 110000),
      new Attendee('dev', 120000),
      new Attendee('dev', 130000),
    ];
    expect(service.intervalRate).toEqual(0.006143162393162394);
  });
});
