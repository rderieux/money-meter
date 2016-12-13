import {TestBed} from '@angular/core/testing';
import { SettingsComponent } from './settings.component';

describe('Component: SettingsComponent', () => {
  let comp, fixture, element, de;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],
    });

        fixture = TestBed.createComponent(SettingsComponent);
        comp = fixture.componentInstance;
        element = fixture.nativeElement;
        de = fixture.debugElement;
      });

  it('should have a defined component', () => {
    expect(comp).toBeDefined();
  })
})
