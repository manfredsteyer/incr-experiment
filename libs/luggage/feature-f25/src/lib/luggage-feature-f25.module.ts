import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F25Component } from './f25.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F25Component],
  exports: [F25Component],
})
export class LuggageFeatureF25Module {}
