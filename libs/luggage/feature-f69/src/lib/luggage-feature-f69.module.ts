import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F69Component } from './f69.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F69Component],
  exports: [F69Component],
})
export class LuggageFeatureF69Module {}
