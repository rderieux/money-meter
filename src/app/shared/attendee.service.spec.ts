import {TestBed, async, inject} from '@angular/core/testing';
import AttendeeService from './attendee.service';
import Attendee from "./attendee";
import {XHRBackend, HttpModule, Response, ResponseOptions} from "@angular/http";
import {MockBackend} from "@angular/http/testing";

describe('Service: AttendeeService', () => {
  let mockbackend, service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        AttendeeService,
        { provide: XHRBackend, useClass: MockBackend }
        ]
    })
  });

  beforeEach(inject([AttendeeService, XHRBackend], (_service, _mockbackend) => {
    service = _service;
    mockbackend = _mockbackend;
  }));

  it('should return mocked response (async)', async(() => {
    let response = [
      {
        "_id":"5823edd8c3a0e41b9ce94192",
        "role":"Senior Software Developer",
        "salary":80000
      }
      ,
      {
        "_id":"5823edd8c3a0e41b9ce94193",
        "role":"Junior Software Developer",
        "salary":50000
      }
    ];

    mockbackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(response)})));
    });
    // service.attendees.subscribe(attendees => {
    //   expect(attendees).toContain('Senior Software Developer');
    //   expect(attendees).toContain('Junior Software Developer');
    //   expect(attendees.length).toBe(2);
    // });
  }));
});
