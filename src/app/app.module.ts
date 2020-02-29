import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenericInputComponent } from './generic-input/generic-input.component';
import { AddressFormComponent } from './address-form/address-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericInputComponent,
    AddressFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
