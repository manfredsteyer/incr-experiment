import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F26Component } from './f26.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F26Component],
  exports: [F26Component],
})
export class LuggageFeatureF26Module {}
