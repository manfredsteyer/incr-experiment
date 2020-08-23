import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F58Component } from './f58.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F58Component],
  exports: [F58Component],
})
export class LuggageFeatureF58Module {}
