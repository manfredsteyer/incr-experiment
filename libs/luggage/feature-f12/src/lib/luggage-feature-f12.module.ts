import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F12Component } from './f12.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F12Component],
  exports: [F12Component],
})
export class LuggageFeatureF12Module {}
