import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  //TODO add and remove from attendee service
  // save(): void {
  //   this.attendeeService.update(this.attendees)
  //     .then(() => goBack());
  // }
  //
  // goBack(): void {
  //   this.location.back();
  // }
}
