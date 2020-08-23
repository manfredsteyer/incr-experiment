import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F9Component } from './f9.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F9Component],
  exports: [F9Component],
})
export class LuggageFeatureF9Module {}
