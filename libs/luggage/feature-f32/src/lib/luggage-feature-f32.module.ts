import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F32Component } from './f32.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F32Component],
  exports: [F32Component],
})
export class LuggageFeatureF32Module {}
