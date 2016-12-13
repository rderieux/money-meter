/* tslint:disable:no-unused-variable */

// import { TestBed, async } from '@angular/core/testing';
// import { AttendeeListComponent } from './attendee-list.component';
//
// describe('Component: AttendeeList', () => {
//   it('should create an instance', () => {
//     let component = new AttendeeListComponent();
//     expect(component).toBeTruthy();
//   });
// });

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AttendeeListComponent } from './attendee-list.component';
import {FormGroup, FormBuilder, ReactiveFormsModule} from "@angular/forms";

describe('Component: AttendeeDetail', () => {
  let comp: AttendeeListComponent;
  let fixture: ComponentFixture<AttendeeListComponent>;
  let element, de;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AttendeeListComponent],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        ReactiveFormsModule,
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AttendeeListComponent);
        comp = fixture.componentInstance;
        element = fixture.nativeElement;
        de = fixture.debugElement;
      });
  }));

  it('should have a defined component', () => {
    expect(comp).toBeDefined();
  })
})
