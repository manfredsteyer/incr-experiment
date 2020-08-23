import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F7Component } from './f7.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F7Component],
  exports: [F7Component],
})
export class LuggageFeatureF7Module {}
