import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F86Component } from './f86.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F86Component],
  exports: [F86Component],
})
export class LuggageFeatureF86Module {}
