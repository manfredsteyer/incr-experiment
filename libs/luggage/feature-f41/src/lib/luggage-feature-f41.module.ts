import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F41Component } from './f41.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F41Component],
  exports: [F41Component],
})
export class LuggageFeatureF41Module {}
