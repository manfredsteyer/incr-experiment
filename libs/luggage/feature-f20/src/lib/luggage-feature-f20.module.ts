import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F20Component } from './f20.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F20Component],
  exports: [F20Component],
})
export class LuggageFeatureF20Module {}
