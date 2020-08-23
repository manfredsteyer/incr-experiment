import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F39Component } from './f39.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F39Component],
  exports: [F39Component],
})
export class LuggageFeatureF39Module {}
