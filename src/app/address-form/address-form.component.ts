import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AddressFormComponent,
      multi: true
    }
  ],
  // viewProviders: [
  //   { provide: ControlContainer, useExisting: FormGroupDirective }
  // ]
})
export class AddressFormComponent implements OnInit, ControlValueAccessor {


  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    // private ctrlContainer: FormGroupDirective
    ) { }

  ngOnInit() {

    // this.form = this.ctrlContainer.form;

    this.form = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      phone: [null, null],
      street: [null, [Validators.required]],
      city: [null, [Validators.required]],
      state: [null],
      zip: [null, [Validators.required]],
    });
  }

  onTouched() {

  }

  writeValue(obj: any): void {
    if (obj) {
      this.form.setValue(obj, { emitEvent: false });
    }
  }
  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disabled : this.form.enabled;
  }

}
