import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pages/beehive-red-happy',
    loadChildren: () => import('../../../beehive-red/src/app/pages/bee-red-happy/bee-red-happy.module').then(m => m.BeeRedHappyModule)
  },
  {
    path: 'pages/beehive-red-angry',
    loadChildren: () => import('../../../beehive-red/src/app/pages/bee-red-angry/bee-red-angry.module').then(m => m.BeeRedAngryModule)
  },
  {
    path: 'pages/beehive-green-angry',
    loadChildren: () => import('../../../beehive-green/src/app/pages/bee-green-angry/bee-green-angry.module')
    .then(m => m.BeeGreenAngryModule)
  },
  {
    path: 'pages/beehive-green-fly',
    loadChildren: () => import('../../../beehive-green/src/app/pages/bee-green-fly/bee-green-fly.module').then(m => m.BeeGreenFlyModule)
  },
  {
    path: 'pages/beehive-blue-shark',
    loadChildren: () => import('../../../beehive-blue/src/app/pages/bee-blue-shark/bee-blue-shark.module').then(m => m.BeeBlueSharkModule)
  },
  {
    path: 'pages/beehive-blue-whale',
    loadChildren: () => import('../../../beehive-blue/src/app/pages/bee-blue-whale/bee-blue-whale.module').then(m => m.BeeBlueWhaleModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
