import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F84Component } from './f84.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F84Component],
  exports: [F84Component],
})
export class LuggageFeatureF84Module {}
