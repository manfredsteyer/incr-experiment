import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F80Component } from './f80.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F80Component],
  exports: [F80Component],
})
export class LuggageFeatureF80Module {}
