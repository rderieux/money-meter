/* tslint:disable:no-unused-variable */

// import { TestBed, async } from '@angular/core/testing';
// import { MeterComponent } from './meter.component';
//
// describe('Component: Meter', () => {
//   it('should create an instance', () => {
//     let component = new MeterComponent();
//     expect(component).toBeTruthy();
//   });
//   it('should increment the meter', () => {
//     let component = new MeterComponent();
//
//   })
// });

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { MeterComponent } from './meter.component';
import {FormGroup, FormBuilder, ReactiveFormsModule} from "@angular/forms";

describe('Component: AttendeeDetail', () => {
  let comp: MeterComponent;
  let fixture: ComponentFixture<MeterComponent>;
  let element, de;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MeterComponent],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        ReactiveFormsModule,
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(MeterComponent);
        comp = fixture.componentInstance;
        element = fixture.nativeElement;
        de = fixture.debugElement;
      });
  }));

  it('should have a defined component', () => {
    expect(comp).toBeDefined();
  })
})
