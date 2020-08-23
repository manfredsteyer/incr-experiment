import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F63Component } from './f63.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F63Component],
  exports: [F63Component],
})
export class LuggageFeatureF63Module {}
