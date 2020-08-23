import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F95Component } from './f95.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F95Component],
  exports: [F95Component],
})
export class LuggageFeatureF95Module {}
