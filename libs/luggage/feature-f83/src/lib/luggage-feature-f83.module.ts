import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F83Component } from './f83.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F83Component],
  exports: [F83Component],
})
export class LuggageFeatureF83Module {}
