import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { MeterComponent } from './meter/meter.component';
import { MenuComponent } from './menu/menu.component';
// import MenuService from './shared/menu.service';
import AttendeeService from './shared/attendee.service';
import { SettingsComponent } from './settings/settings.component';
import { AttendeeListComponent } from './attendee-list/attendee-list.component';
import { AttendeeDetailComponent } from './attendee-detail/attendee-detail.component';
import { MeetingAttendeesComponent } from './meeting-attendees/meeting-attendees.component';

@NgModule({
  declarations: [
    AppComponent,
    MeterComponent,
    MenuComponent,
    SettingsComponent,
    AttendeeListComponent,
    AttendeeDetailComponent,
    MeetingAttendeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'meter',
        component: MeterComponent
      },
      {
        path: 'attendees',
        component: AttendeeListComponent
      },
      {
        path: '',
        redirectTo: 'meter',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    // MenuService,
    AttendeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
