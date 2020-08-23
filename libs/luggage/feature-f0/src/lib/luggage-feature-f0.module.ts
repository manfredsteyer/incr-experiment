import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F0Component } from './f0.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F0Component],
  exports: [F0Component],
})
export class LuggageFeatureF0Module {}
