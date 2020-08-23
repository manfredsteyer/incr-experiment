import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F1Component } from './f1.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F1Component],
  exports: [F1Component],
})
export class LuggageFeatureF1Module {}
