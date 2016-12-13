/* tslint:disable:no-unused-variable */

// import { TestBed, async } from '@angular/core/testing';
// import { MenuComponent } from './menu.component';
//
// describe('Component: Menu', () => {
//   it('should create an instance', () => {
//     let component = new MenuComponent();
//     expect(component).toBeTruthy();
//   });
// });

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import {FormGroup, FormBuilder, ReactiveFormsModule} from "@angular/forms";

describe('Component: AttendeeDetail', () => {
  let comp: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let element, de;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        ReactiveFormsModule,
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(MenuComponent);
        comp = fixture.componentInstance;
        element = fixture.nativeElement;
        de = fixture.debugElement;
      });
  }));

  it('should have a defined component', () => {
    expect(comp).toBeDefined();
  })
})
