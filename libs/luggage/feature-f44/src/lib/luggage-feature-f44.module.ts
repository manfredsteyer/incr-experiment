import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F44Component } from './f44.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F44Component],
  exports: [F44Component],
})
export class LuggageFeatureF44Module {}
