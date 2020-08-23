import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F66Component } from './f66.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F66Component],
  exports: [F66Component],
})
export class LuggageFeatureF66Module {}
