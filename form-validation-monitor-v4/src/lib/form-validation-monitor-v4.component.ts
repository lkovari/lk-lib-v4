import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, AbstractControl, NgForm, NgModelGroup } from '@angular/forms';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'lk-form-validation-monitor-v4',
  templateUrl: './form-validation-monitor-v4.component.html',
  styleUrls: ['./form-validation-monitor-v4.component.scss']
})
export class FormValidationMonitorV4Component implements OnInit {
  private readonly PROPERY_TYPE = 'type';
  private readonly PROPERY_STATUS = 'status';
  private readonly PROPERY_VALID = 'valid';
  private readonly PROPERY_INVALID = 'invalid';
  private readonly PROPERY_PENDING = 'pending';
  private readonly PROPERY_PRISTINE = 'pristine';
  private readonly PROPERY_DIRTY = 'dirty';
  private readonly PROPERY_TOUCHED = 'touched';
  private readonly PROPERY_UNTOUCHED = 'untouched';
  private readonly PROPERY_VALUE = 'value';
  formControlStatusKeys = [this.PROPERY_TYPE, this.PROPERY_STATUS, this.PROPERY_VALID, this.PROPERY_INVALID, this.PROPERY_PENDING,
                          this.PROPERY_PRISTINE, this.PROPERY_DIRTY, this.PROPERY_TOUCHED, this.PROPERY_UNTOUCHED, this.PROPERY_VALUE];

  private _mainFormGroup: FormGroup;
  private _topGap = '2';
  controlList = new Array<FormControl>();
  formGroupStack = new Array<FormGroup>();
  @Input()
  set mainFormGroup(v: any) {
    if (v instanceof NgForm) {
      this._mainFormGroup = <FormGroup>v.form;
    } else {
      this._mainFormGroup = <FormGroup>v;
    }
  }
  get mainFormGroup(): any {
    return this._mainFormGroup;
  }
  @Input()
  set topGap(v: string) {
    this._topGap = v;
  }
  get topGap(): string {
    return this._topGap;
  }
  @Input() fontSize = 1; 
  /*
   * DEVELOPER NOTE: almost all function which called from the template probably should replace with pure pipe, to optimize performance.
   */
  constructor(private meta: Meta) { }


  ngOnInit() {
    this.meta.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });
  }

  extractFormGroupPropertyValueByKey(key: string): string {
    return this.mainFormGroup ? this.mainFormGroup[key] : null;
  }

  isComplexControl(ctrl: AbstractControl): boolean {
    return (ctrl instanceof FormGroup) || (ctrl instanceof FormArray) || (ctrl instanceof NgModelGroup);
  }

  extractFormControls(): Array<FormControl> {
    this.controlList = [];
    Object.keys( this.mainFormGroup.controls).forEach(key => {
      this.controlList.push(<FormControl>this.mainFormGroup.controls[key]);
    });
    return this.controlList;
  }

  extractFormControlKeys(): string[] {
    let formControlKey = new Array<string>();
    if (this.mainFormGroup && this.mainFormGroup.controls) {
      formControlKey = Object.keys(this.mainFormGroup.controls);
    }
    return formControlKey;
  }

  composeObjectName(ctrlKey: string, v: any): string {
    return ctrlKey + ' : ' + v;
  }

  extractFormElementByKey(ctrlKey?: string): FormControl | FormGroup | FormArray | NgModelGroup {
    // when the ctrlKey is undefined then the mainFormGroup is an NgModelGroup
    let control;
    if (ctrlKey) {
      control = this.mainFormGroup.controls[ctrlKey];
      if (control instanceof FormControl) {
        control = <FormControl>control;
      } else if (control instanceof FormGroup) {
        control = <FormGroup>control;
      } else  if (control instanceof FormArray) {
        control = <FormArray>control;
      }
    } else {
      if (this.mainFormGroup instanceof NgModelGroup) {
        control = this.mainFormGroup.control;
      } else {
        control = this.mainFormGroup;
      }
    }
    return <FormControl | FormGroup | FormArray | NgModelGroup>control;
  }

  extractFormGroupElementByKey(ctrlKey?: string): FormGroup {
    // when the ctrlKey is undefined then the mainFormGroup is an NgModelGroup
    let control = ctrlKey ? this.mainFormGroup.controls[ctrlKey] : this.mainFormGroup.control;
    return control = <FormGroup>control;
  }

  extractFormControlValueByKey(ctrl: FormControl, key: string): any {
    return ctrl[key];
  }

  extractType(control: AbstractControl | NgModelGroup): string {
    let typeName = '';
    if (control instanceof FormControl) {
      typeName = 'FormControl';
    } else if (control instanceof FormGroup) {
      typeName = 'FormGroup';
    } else if (control instanceof FormArray) {
      typeName = 'FormArray';
    }
    return typeName;
  }

  getStyleColor(k: string, v: any): string {
    let color = 'black';
    if ((k === this.PROPERY_STATUS && v === this.PROPERY_VALID) || (k === this.PROPERY_VALID && v) || (k === this.PROPERY_INVALID && !v)) {
      color = 'green';
    } else if ((k === this.PROPERY_STATUS && v === this.PROPERY_INVALID)
            || (k === this.PROPERY_VALID && !v) || (k === this.PROPERY_INVALID && v)) {
      color = 'red';
    } else if (k === 'errors' && v !== null) {
      color = 'red';
    } else if (v instanceof Object) {
      color = 'blue';
    }
    return color;
  }

  isObjectType(v: any): boolean {
    return v ? v instanceof Object : false;
  }

  onClickValue(ctrlKey?: any) {
    // if has ctrlKey then get the property value else get the FormGroup value
    const value = ctrlKey ? this.mainFormGroup.controls[ctrlKey].value : this.mainFormGroup.value;
    window.alert(JSON.stringify(value));
  }

  extractFormName(control: AbstractControl): string | null {
    let group: FormGroup;
    let name = '';
    if (!(control instanceof FormGroup)) {
      return null;
    } else {
      group = <FormGroup>control;
    }
    Object.keys(group.controls).forEach(key => {
      const childControl = group.get(key);
      if (childControl !== control) {
        return;
      }
      name = key;
    });
    return name;
  }

  /**
   *
   * @param control: AbstractControl
   * @return boolean - if true the passedControl is a complex control, else not
   */
  isItComplexControl(control: AbstractControl | NgModelGroup): boolean {
    return control instanceof FormGroup || control instanceof FormArray;
  }

  onComplexControlClicked(control: FormGroup) {
    this.formGroupStack.push(this._mainFormGroup);
    this._mainFormGroup = control;
  }

  enableBackButton(): boolean {
    return this.formGroupStack.length > 0;
  }

  onBackClicked(event: MouseEvent) {
    this._mainFormGroup = this.formGroupStack.pop()!;
    console.log('onBackClicked click event fired ' + event);
  }
}
