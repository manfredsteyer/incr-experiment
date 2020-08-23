import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F93Component } from './f93.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F93Component],
  exports: [F93Component],
})
export class LuggageFeatureF93Module {}
