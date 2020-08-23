import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F30Component } from './f30.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F30Component],
  exports: [F30Component],
})
export class LuggageFeatureF30Module {}
