import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F89Component } from './f89.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F89Component],
  exports: [F89Component],
})
export class LuggageFeatureF89Module {}
