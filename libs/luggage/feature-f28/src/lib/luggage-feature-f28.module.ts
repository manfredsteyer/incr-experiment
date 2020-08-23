import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F28Component } from './f28.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F28Component],
  exports: [F28Component],
})
export class LuggageFeatureF28Module {}
