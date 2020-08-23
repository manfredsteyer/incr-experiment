import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F62Component } from './f62.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F62Component],
  exports: [F62Component],
})
export class LuggageFeatureF62Module {}
