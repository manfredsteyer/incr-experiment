import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F75Component } from './f75.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F75Component],
  exports: [F75Component],
})
export class LuggageFeatureF75Module {}
