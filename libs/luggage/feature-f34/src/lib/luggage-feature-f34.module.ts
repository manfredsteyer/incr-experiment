import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F34Component } from './f34.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F34Component],
  exports: [F34Component],
})
export class LuggageFeatureF34Module {}
