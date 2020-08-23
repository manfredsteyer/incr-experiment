import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F18Component } from './f18.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F18Component],
  exports: [F18Component],
})
export class LuggageFeatureF18Module {}
