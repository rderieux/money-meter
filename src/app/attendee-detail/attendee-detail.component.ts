import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import Attendee from '../shared/attendee';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-attendee-detail',
  templateUrl: './attendee-detail.component.html',
  styleUrls: ['./attendee-detail.component.css']
})
export class AttendeeDetailComponent implements OnInit {

  @Input()
  attendee: Attendee;

  @Output()
  attendeeChanged = new EventEmitter<Attendee>();

  fb: FormBuilder;
  attendeeForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.fb = fb;
  }

  ngOnInit() {
    this.attendeeForm = this.fb.group({
      'attendeeRole': [this.attendee.role],
      'attendeeSalary': [this.attendee.salary]
    });

    this.attendeeForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to', form);
      }
    );

  }



  // onSubmit(attendee: Attendee) {
  //   attendee.id = this.attendee.id;
  //   this.attendeeChanged.emit(attendee);
  // }

}
