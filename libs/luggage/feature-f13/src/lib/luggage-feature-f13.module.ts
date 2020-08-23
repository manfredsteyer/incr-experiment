import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F13Component } from './f13.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F13Component],
  exports: [F13Component],
})
export class LuggageFeatureF13Module {}
