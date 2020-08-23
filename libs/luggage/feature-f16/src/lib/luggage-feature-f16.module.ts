import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F16Component } from './f16.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F16Component],
  exports: [F16Component],
})
export class LuggageFeatureF16Module {}
