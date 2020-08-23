import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F74Component } from './f74.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F74Component],
  exports: [F74Component],
})
export class LuggageFeatureF74Module {}
