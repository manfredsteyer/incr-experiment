import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F10Component } from './f10.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F10Component],
  exports: [F10Component],
})
export class LuggageFeatureF10Module {}
