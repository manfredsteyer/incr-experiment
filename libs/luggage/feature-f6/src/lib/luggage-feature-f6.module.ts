import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F6Component } from './f6.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F6Component],
  exports: [F6Component],
})
export class LuggageFeatureF6Module {}
