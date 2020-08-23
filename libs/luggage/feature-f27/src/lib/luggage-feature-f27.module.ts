import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F27Component } from './f27.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F27Component],
  exports: [F27Component],
})
export class LuggageFeatureF27Module {}
