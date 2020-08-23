import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F99Component } from './f99.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F99Component],
  exports: [F99Component],
})
export class LuggageFeatureF99Module {}
