import {TestBed, async, inject} from '@angular/core/testing';
import AttendeeService from './attendee.service';
import Attendee from "./attendee";

describe('Service: AttendeeService', () => {
  let service;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [ AttendeeService ]
  }));

  beforeEach(inject([AttendeeService], s => {
    service = s;
  }));

  it('should return attendees', () => {
    expect(service.get()).toBeTruthy();
  });
});
