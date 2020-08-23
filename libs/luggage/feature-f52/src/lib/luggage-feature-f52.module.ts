import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F52Component } from './f52.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F52Component],
  exports: [F52Component],
})
export class LuggageFeatureF52Module {}
