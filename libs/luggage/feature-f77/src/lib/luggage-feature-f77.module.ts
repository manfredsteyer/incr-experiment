import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F77Component } from './f77.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F77Component],
  exports: [F77Component],
})
export class LuggageFeatureF77Module {}
