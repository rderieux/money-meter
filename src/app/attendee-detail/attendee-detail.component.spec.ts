/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AttendeeDetailComponent } from './attendee-detail.component';
import {FormBuilder} from "@angular/forms";

describe('Component: AttendeeDetail', () => {
  let comp: AttendeeDetailComponent;
  let fixture: ComponentFixture<AttendeeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AttendeeDetailComponent],
      providers: [
        FormBuilder
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AttendeeDetailComponent);
        comp = fixture.componentInstance;
      });
  }));

  it('should create an instance', () => {
    comp.attendeeForm.controls["role"].setValue("TestRole");
    comp.attendeeForm.controls["salary"].setValue("1");
    expect(comp.attendeeForm.valid).toBeTruthy();
  });

  it('should create an instance', () => {
    comp.attendeeForm.controls["role"].setValue("1");
    expect(comp.attendeeForm.valid).toBeFalsy();
  });

  it('should create an instance', () => {
    comp.attendeeForm.controls["salary"].setValue("1");
    expect(comp.attendeeForm.valid).toBeFalsy();
  });
});
