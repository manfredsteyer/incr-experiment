import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F96Component } from './f96.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F96Component],
  exports: [F96Component],
})
export class LuggageFeatureF96Module {}
