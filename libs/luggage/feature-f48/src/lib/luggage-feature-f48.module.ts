import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F48Component } from './f48.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F48Component],
  exports: [F48Component],
})
export class LuggageFeatureF48Module {}
