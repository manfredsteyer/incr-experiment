import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F40Component } from './f40.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F40Component],
  exports: [F40Component],
})
export class LuggageFeatureF40Module {}
