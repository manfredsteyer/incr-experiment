import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F81Component } from './f81.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F81Component],
  exports: [F81Component],
})
export class LuggageFeatureF81Module {}
