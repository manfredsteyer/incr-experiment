import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F88Component } from './f88.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F88Component],
  exports: [F88Component],
})
export class LuggageFeatureF88Module {}
