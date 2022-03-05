import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BeeGreenAngryRoutingModule } from './bee-green-angry-routing.module';
import { BeeGreenAngryComponent } from './bee-green-angry.component';




@NgModule({
  declarations: [BeeGreenAngryComponent],
  imports: [
    CommonModule,
    BeeGreenAngryRoutingModule
  ]
})
export class BeeGreenAngryModule { }
