/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AttendeeDetailComponent } from './attendee-detail.component';
import {FormGroup, FormBuilder, ReactiveFormsModule} from "@angular/forms";
import Attendee from "../shared/attendee";
import {By} from "@angular/platform-browser";

describe('Component: AttendeeDetail', () => {
  let comp: AttendeeDetailComponent;
  let fixture: ComponentFixture<AttendeeDetailComponent>;
  let element, de;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AttendeeDetailComponent],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        ReactiveFormsModule,
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AttendeeDetailComponent);
        comp = fixture.componentInstance;
        element = fixture.nativeElement;
        de = fixture.debugElement;
      });
  }));

  it('should have a defined component', () => {
    expect(comp).toBeDefined();
  })

  it('should render `Test`', async(() => {
    comp.attendee = new Attendee('Test', 1);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(element.querySelector('roleInput').innerText).toBe('Test');
      expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Test');
    })
    }))

  it('should be valid with role and salary', () => {
    comp.attendeeForm.controls["role"].setValue("TestRole");
    comp.attendeeForm.controls["salary"].setValue("1");
    expect(comp.attendeeForm.valid).toBeTruthy();
  });

  it('should be invalid without salary', () => {
    comp.attendeeForm.controls["role"].setValue("1");
    expect(comp.attendeeForm.valid).toBeFalsy();
  });

  it('should be invalid without role', () => {
    comp.attendeeForm.controls["salary"].setValue("1");
    expect(comp.attendeeForm.valid).toBeFalsy();
  });
});
