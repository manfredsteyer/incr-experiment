import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F98Component } from './f98.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F98Component],
  exports: [F98Component],
})
export class LuggageFeatureF98Module {}
