import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeeGreenFlyRoutingModule } from './bee-green-fly-routing.module';
import { BeeGreenFlyComponent } from './bee-green-fly.component';


@NgModule({
  declarations: [BeeGreenFlyComponent],
  imports: [
    CommonModule,
    BeeGreenFlyRoutingModule
  ]
})
export class BeeGreenFlyModule { }
