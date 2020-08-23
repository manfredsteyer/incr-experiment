import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F94Component } from './f94.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F94Component],
  exports: [F94Component],
})
export class LuggageFeatureF94Module {}
