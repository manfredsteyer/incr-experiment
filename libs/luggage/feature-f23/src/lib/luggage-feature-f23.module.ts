import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F23Component } from './f23.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F23Component],
  exports: [F23Component],
})
export class LuggageFeatureF23Module {}
