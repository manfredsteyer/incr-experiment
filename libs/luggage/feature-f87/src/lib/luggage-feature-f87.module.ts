import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F87Component } from './f87.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F87Component],
  exports: [F87Component],
})
export class LuggageFeatureF87Module {}
