import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationMonitorV4Component } from './form-validation-monitor-v4.component';

describe('FormValidationMonitorV4Component', () => {
  let component: FormValidationMonitorV4Component;
  let fixture: ComponentFixture<FormValidationMonitorV4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidationMonitorV4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidationMonitorV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
