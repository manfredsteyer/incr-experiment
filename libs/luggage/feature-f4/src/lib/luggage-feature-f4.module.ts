import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F4Component } from './f4.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F4Component],
  exports: [F4Component],
})
export class LuggageFeatureF4Module {}
