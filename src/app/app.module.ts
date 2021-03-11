import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstCapitalCharCustomValidator } from './first-capital-char-custom.validator';
import { FormValidationMonitorV4Module } from '../../form-validation-monitor-v4/src/lib/form-validation-monitor-v4.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstCapitalCharCustomValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    FormValidationMonitorV4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
