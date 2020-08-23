import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F17Component } from './f17.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F17Component],
  exports: [F17Component],
})
export class LuggageFeatureF17Module {}
