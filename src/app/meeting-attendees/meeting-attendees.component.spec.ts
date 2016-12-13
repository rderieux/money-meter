/* tslint:disable:no-unused-variable */
//
// import { TestBed, async } from '@angular/core/testing';
// import { MeetingAttendeesComponent } from './meeting-attendees.component';
//
// describe('Component: MeetingAttendees', () => {
//   it('should create an instance', () => {
//     let component = new MeetingAttendeesComponent();
//     expect(component).toBeTruthy();
//   });
// });


import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { MeetingAttendeesComponent } from './meeting-attendees.component';
import {FormGroup, FormBuilder, ReactiveFormsModule} from "@angular/forms";

describe('Component: AttendeeDetail', () => {
  let comp: MeetingAttendeesComponent;
  let fixture: ComponentFixture<MeetingAttendeesComponent>;
  let element, de;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingAttendeesComponent],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        ReactiveFormsModule,
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(MeetingAttendeesComponent);
        comp = fixture.componentInstance;
        element = fixture.nativeElement;
        de = fixture.debugElement;
      });
  }));

  it('should have a defined component', () => {
    expect(comp).toBeDefined();
  })
})
