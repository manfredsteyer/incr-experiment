import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F71Component } from './f71.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F71Component],
  exports: [F71Component],
})
export class LuggageFeatureF71Module {}
