import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F11Component } from './f11.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F11Component],
  exports: [F11Component],
})
export class LuggageFeatureF11Module {}
