import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F47Component } from './f47.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F47Component],
  exports: [F47Component],
})
export class LuggageFeatureF47Module {}
