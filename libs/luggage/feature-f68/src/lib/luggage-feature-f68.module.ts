import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F68Component } from './f68.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F68Component],
  exports: [F68Component],
})
export class LuggageFeatureF68Module {}
