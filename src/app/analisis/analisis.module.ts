import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalisisComponent } from './analisis/analisis.component';
import { AnalisisRoutingModule } from './analisis-routing.module';



@NgModule({
  declarations: [
    AnalisisComponent
  ],
  imports: [
    CommonModule,
    AnalisisRoutingModule
  ]
})
export class AnalisisModule { }
