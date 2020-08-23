import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F78Component } from './f78.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F78Component],
  exports: [F78Component],
})
export class LuggageFeatureF78Module {}
