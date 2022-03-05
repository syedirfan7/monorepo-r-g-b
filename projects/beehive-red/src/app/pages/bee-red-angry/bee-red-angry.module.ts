import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibBeehiveUISharedModule } from './../../../../../lib-beehive-ui-shared/src/lib/lib-beehive-ui-shared.module';
import { BeeRedAngryRoutingModule } from './bee-red-angry-routing.module';
import { BeeRedAngryComponent } from './bee-red-angry.component';



@NgModule({
  declarations: [BeeRedAngryComponent],
  imports: [
    CommonModule,
    BeeRedAngryRoutingModule,
    LibBeehiveUISharedModule
  ]
})
export class BeeRedAngryModule { }
