import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F79Component } from './f79.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F79Component],
  exports: [F79Component],
})
export class LuggageFeatureF79Module {}
