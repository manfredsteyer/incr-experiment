import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F85Component } from './f85.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F85Component],
  exports: [F85Component],
})
export class LuggageFeatureF85Module {}
