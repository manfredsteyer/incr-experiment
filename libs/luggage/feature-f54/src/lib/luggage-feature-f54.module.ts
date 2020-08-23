import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F54Component } from './f54.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F54Component],
  exports: [F54Component],
})
export class LuggageFeatureF54Module {}
