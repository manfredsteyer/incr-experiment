import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F33Component } from './f33.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F33Component],
  exports: [F33Component],
})
export class LuggageFeatureF33Module {}
