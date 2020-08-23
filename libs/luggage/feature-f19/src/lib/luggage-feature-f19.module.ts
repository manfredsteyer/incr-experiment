import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F19Component } from './f19.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F19Component],
  exports: [F19Component],
})
export class LuggageFeatureF19Module {}
