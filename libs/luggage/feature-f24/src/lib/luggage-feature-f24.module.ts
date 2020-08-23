import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F24Component } from './f24.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F24Component],
  exports: [F24Component],
})
export class LuggageFeatureF24Module {}
