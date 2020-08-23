import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F5Component } from './f5.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F5Component],
  exports: [F5Component],
})
export class LuggageFeatureF5Module {}
