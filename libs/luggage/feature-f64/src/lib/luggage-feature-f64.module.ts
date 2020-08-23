import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F64Component } from './f64.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F64Component],
  exports: [F64Component],
})
export class LuggageFeatureF64Module {}
