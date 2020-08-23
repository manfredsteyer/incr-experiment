import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F15Component } from './f15.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F15Component],
  exports: [F15Component],
})
export class LuggageFeatureF15Module {}
