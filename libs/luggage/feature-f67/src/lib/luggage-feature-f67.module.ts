import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F67Component } from './f67.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F67Component],
  exports: [F67Component],
})
export class LuggageFeatureF67Module {}
