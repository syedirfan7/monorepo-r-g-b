import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeeBlueSharkComponent } from './bee-blue-shark.component';

const routes: Routes = [
  {
    path:'',component:BeeBlueSharkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeeBlueSharkRoutingModule { }
