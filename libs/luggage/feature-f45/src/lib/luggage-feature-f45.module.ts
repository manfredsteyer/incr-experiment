import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F45Component } from './f45.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F45Component],
  exports: [F45Component],
})
export class LuggageFeatureF45Module {}
