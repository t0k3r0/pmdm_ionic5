import { ExploreContainerComponent } from './explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular';
import { SucesosComponent } from './sucesos/sucesos.component';
import { SucesoComponent } from './suceso/suceso.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SucesoComponent,
    SucesosComponent,
    ExploreContainerComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    SucesosComponent,
    ExploreContainerComponent
  ]
})
export class ComponentsModule { }
