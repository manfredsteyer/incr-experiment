import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F51Component } from './f51.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F51Component],
  exports: [F51Component],
})
export class LuggageFeatureF51Module {}
