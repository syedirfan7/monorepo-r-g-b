import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeeBlueSharkRoutingModule } from './bee-blue-shark-routing.module';
import { BeeBlueSharkComponent } from './bee-blue-shark.component';


@NgModule({
  declarations: [BeeBlueSharkComponent],
  imports: [
    CommonModule,
    BeeBlueSharkRoutingModule
  ]
})
export class BeeBlueSharkModule { }
