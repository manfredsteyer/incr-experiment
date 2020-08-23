import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F82Component } from './f82.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F82Component],
  exports: [F82Component],
})
export class LuggageFeatureF82Module {}
