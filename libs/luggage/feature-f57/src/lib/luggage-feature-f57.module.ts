import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F57Component } from './f57.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F57Component],
  exports: [F57Component],
})
export class LuggageFeatureF57Module {}
