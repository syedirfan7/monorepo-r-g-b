import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeeBlueWhaleRoutingModule } from './bee-blue-whale-routing.module';
import { BeeBlueWhaleComponent } from './bee-blue-whale.component';


@NgModule({
  declarations: [BeeBlueWhaleComponent],
  imports: [
    CommonModule,
    BeeBlueWhaleRoutingModule
  ]
})
export class BeeBlueWhaleModule { }
