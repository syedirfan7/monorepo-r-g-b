import { Component } from '@angular/core';
import { Imenu } from 'projects/lib-beehive-ui-shared/src/lib/features/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beehive-RGB';
  rgbModuleRoutes: Imenu[] = [
    { path: 'pages/beehive-red-happy', name: 'Beehive-Red-Happy' },
    { path: 'pages/beehive-red-angry', name: 'Beehive-Red-Angry' },
    { path: 'pages/beehive-green-angry', name: 'Beehive-Green-Angry' },
    { path: 'pages/beehive-green-fly', name: 'Beehive-Green-Fly' },
    { path: 'pages/beehive-blue-shark', name: 'Beehive-Blue-Shark' },
    { path: 'pages/beehive-blue-whale', name: 'Beehive-Blue-Whale' }
  ];
}
