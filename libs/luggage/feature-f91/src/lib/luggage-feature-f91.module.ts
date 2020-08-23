import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F91Component } from './f91.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F91Component],
  exports: [F91Component],
})
export class LuggageFeatureF91Module {}
