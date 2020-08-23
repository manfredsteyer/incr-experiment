import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F90Component } from './f90.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F90Component],
  exports: [F90Component],
})
export class LuggageFeatureF90Module {}
