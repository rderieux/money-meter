import { Component, OnInit, Input } from '@angular/core';
import Attendee from '../shared/attendee';

@Component({
  selector: 'app-attendee-detail',
  templateUrl: './attendee-detail.component.html',
  styleUrls: ['./attendee-detail.component.css']
})
export class AttendeeDetailComponent implements OnInit {

  @Input()
  attendee: Attendee;

  constructor() { }

  ngOnInit() {
  }

}
