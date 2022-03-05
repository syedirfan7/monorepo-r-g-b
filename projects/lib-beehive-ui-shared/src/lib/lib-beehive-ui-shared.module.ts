import { ComponentIdentifierModule } from './features/component-identifier/component-identifier.module';
import { NgModule } from '@angular/core';
import { LibBeehiveUISharedComponent } from './lib-beehive-ui-shared.component';
import { MenuModule } from './features/menu/menu.module';



@NgModule({
  declarations: [LibBeehiveUISharedComponent],
  imports: [
  ],
  exports: [ComponentIdentifierModule,MenuModule]
})
export class LibBeehiveUISharedModule { }
