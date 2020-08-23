import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F61Component } from './f61.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F61Component],
  exports: [F61Component],
})
export class LuggageFeatureF61Module {}
