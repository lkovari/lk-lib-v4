import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormValidationMonitorV4Component } from './form-validation-monitor-v4.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [FormValidationMonitorV4Component],
  exports: [FormValidationMonitorV4Component]
})
export class FormValidationMonitorV4Module { }
