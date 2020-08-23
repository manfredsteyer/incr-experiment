import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F43Component } from './f43.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F43Component],
  exports: [F43Component],
})
export class LuggageFeatureF43Module {}
