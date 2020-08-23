import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F49Component } from './f49.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F49Component],
  exports: [F49Component],
})
export class LuggageFeatureF49Module {}
