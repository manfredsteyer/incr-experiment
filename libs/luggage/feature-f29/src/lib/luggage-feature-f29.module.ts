import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F29Component } from './f29.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F29Component],
  exports: [F29Component],
})
export class LuggageFeatureF29Module {}
