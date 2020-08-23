import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F42Component } from './f42.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F42Component],
  exports: [F42Component],
})
export class LuggageFeatureF42Module {}
