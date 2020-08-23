import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F59Component } from './f59.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F59Component],
  exports: [F59Component],
})
export class LuggageFeatureF59Module {}
