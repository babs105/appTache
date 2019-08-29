import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TacheRoutingModule } from './tache-routing.module';
import { ItemsComponent } from './components/items/items.component';
import { TacheComponent } from './tache.component';
// import { HttpClientModule } from '@angular/common/http';

@NgModule({
  exports: [
    ItemsComponent
  ],
  declarations: [
    ItemsComponent,
    TacheComponent
  ],
  imports: [
    CommonModule,
    TacheRoutingModule
  ]
})
export class TacheModule { }
