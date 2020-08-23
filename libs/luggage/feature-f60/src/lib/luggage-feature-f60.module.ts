import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F60Component } from './f60.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F60Component],
  exports: [F60Component],
})
export class LuggageFeatureF60Module {}
