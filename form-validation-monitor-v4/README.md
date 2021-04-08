# Form Validation Monitor V4

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.10

## Description of the form-validation-monitor-v4

This npm contains an Angular form validation monitor tool. (lk-form-validation-monitor-v4)

The purpose of the Angular form validation monitor tool is, to show in realtime the angular validation result (status, valid, invalid) and validation signals (pristine, dirty, touched, untouched) with the _FormControl_, _FormGroup_, _FormArray_ value eg. of the three fundamental building blocks (_FormControl, FormGroup, FormArray_) of Angular forms. 

If the main form contains a complex building block eg. _FormGroup_ or _FormArray_, the user if click on it, can recursively traverse the complex building block content. 

Prerequisities is standard Template-Driven or Reactive (with former name model-driven) Angular forms.

## Usage of the  Form Validation Monitor selector: _lk-form-validation-monitor-v4_

_<lk-form-validation-monitor-v4 [mainFormGroup]="dataEntryForm" [topGap]="5" [fontSize]="1"></lk-form-validation-monitor-v4>_

Where the 

- mainFormGroup is the reference in the templae of the main form, 
- topGap is the height of the gap in rem, between the UI of the Form Validation Monitor and other UI elements above
- fontSize is the numeric value the size of font in rem

_<form (ngSubmit)="onSubmit(dataEntryForm)" #dataEntryForm="ngForm" novalidate autocomplete="off">_

what we captured with ViewChild, for example see below

_@ViewChild('dataEntryForm') dataEntryForm: NgForm;_

Do not forget to import the _FormValidationMonitorModule_ into that module which contains the main form.

## Build

Run `ng build form-validation-monitor-v4` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build form-validation-monitor-v4`, go to the dist folder `cd dist/form-validation-monitor-v4` and run `npm publish`.

## Compatibility

Angular version 4.22 or above.

## Example UI. and the real life usage

![Example UI](https://github.com/lkovari/KLHome/blob/master/src/assets/images/Example-Of-the-lk-form-validation-monitor.png)

[Can check the real life usage of the form-validation-monitor-v4 tool on this URL](https://lkovari.github.io/KLHome/#/angular-page/angular-page-content7)
