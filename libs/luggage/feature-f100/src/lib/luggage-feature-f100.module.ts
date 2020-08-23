import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F100Component } from './f100.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F100Component],
  exports: [F100Component],
})
export class LuggageFeatureF100Module {}
