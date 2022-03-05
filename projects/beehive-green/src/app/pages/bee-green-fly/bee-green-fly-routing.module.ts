import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeeGreenFlyComponent } from './bee-green-fly.component';

const routes: Routes = [{
  path:'',component:BeeGreenFlyComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeeGreenFlyRoutingModule { }
