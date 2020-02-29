import { Component, OnInit, Input, ViewChild, ElementRef, Self } from '@angular/core';
import {
  ControlValueAccessor, NG_VALUE_ACCESSOR,
  Validator, AbstractControl, ValidationErrors,
  ValidatorFn, Validators, NG_VALIDATORS, NgControl
} from '@angular/forms';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss'],
  providers: [
    // {
    //   provide: NG_VALUE_ACCESSOR,
    //   useExisting: GenericInputComponent,
    //   multi: true
    // },
    // {
    //   provide: NG_VALIDATORS,
    //   useExisting: GenericInputComponent,
    //   multi: true
    // }
  ]
})
export class GenericInputComponent implements
  OnInit, ControlValueAccessor, Validator {



  @ViewChild('input', { static: true }) input: ElementRef;
  disabled;

  @Input() type = 'text';
  @Input() isRequired = false;
  @Input() pattern: string = null;
  @Input() label: string = null;
  @Input() placeholder: string;
  @Input() errorMsg: string;
  constructor(@Self() public controlDir: NgControl) {
    controlDir.valueAccessor = this;
  }

  ngOnInit() {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] =
      control.validator ? [control.validator] : [];

    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  validate(control: AbstractControl): ValidationErrors {
    const validators: ValidatorFn[] = [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    return validators;
  }


  writeValue(obj: any): void {
    this.input.nativeElement.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  onChange(event) { }

  onTouched() { }
}
