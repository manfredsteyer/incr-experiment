import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F46Component } from './f46.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F46Component],
  exports: [F46Component],
})
export class LuggageFeatureF46Module {}
