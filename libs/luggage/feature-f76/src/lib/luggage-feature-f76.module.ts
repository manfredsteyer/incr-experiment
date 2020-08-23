import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F76Component } from './f76.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F76Component],
  exports: [F76Component],
})
export class LuggageFeatureF76Module {}
