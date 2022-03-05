import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LibBeehiveUISharedModule } from './../../../../../lib-beehive-ui-shared/src/lib/lib-beehive-ui-shared.module';
import { BeeRedHappyRoutingModule } from './bee-red-happy-routing.module';
import { BeeRedHappyComponent } from './bee-red-happy.component';


@NgModule({
  declarations: [BeeRedHappyComponent],
  imports: [
    CommonModule,
    BeeRedHappyRoutingModule,
    LibBeehiveUISharedModule
  ]
})
export class BeeRedHappyModule { }
