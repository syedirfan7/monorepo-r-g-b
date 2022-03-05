import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeeBlueWhaleComponent } from './bee-blue-whale.component';

const routes: Routes = [{
  path: '', component: BeeBlueWhaleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeeBlueWhaleRoutingModule { }
