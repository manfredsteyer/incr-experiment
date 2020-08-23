import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F55Component } from './f55.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F55Component],
  exports: [F55Component],
})
export class LuggageFeatureF55Module {}
