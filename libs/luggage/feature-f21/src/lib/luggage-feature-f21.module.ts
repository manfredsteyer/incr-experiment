import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F21Component } from './f21.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F21Component],
  exports: [F21Component],
})
export class LuggageFeatureF21Module {}
