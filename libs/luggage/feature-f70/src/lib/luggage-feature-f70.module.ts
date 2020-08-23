import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F70Component } from './f70.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F70Component],
  exports: [F70Component],
})
export class LuggageFeatureF70Module {}
