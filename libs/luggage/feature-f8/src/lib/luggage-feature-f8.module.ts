import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F8Component } from './f8.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F8Component],
  exports: [F8Component],
})
export class LuggageFeatureF8Module {}
