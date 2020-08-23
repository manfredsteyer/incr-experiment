import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F31Component } from './f31.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F31Component],
  exports: [F31Component],
})
export class LuggageFeatureF31Module {}
