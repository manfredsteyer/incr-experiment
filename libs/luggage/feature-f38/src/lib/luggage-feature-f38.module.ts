import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F38Component } from './f38.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F38Component],
  exports: [F38Component],
})
export class LuggageFeatureF38Module {}
