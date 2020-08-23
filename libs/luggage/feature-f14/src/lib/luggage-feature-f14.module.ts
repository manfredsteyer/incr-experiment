import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F14Component } from './f14.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F14Component],
  exports: [F14Component],
})
export class LuggageFeatureF14Module {}
