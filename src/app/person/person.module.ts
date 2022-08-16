import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from '../person/person.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SelectValidator } from './validator';



@NgModule({
  declarations: [
    PersonComponent,SelectValidator 
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[
    PersonComponent,SelectValidator
  ]
})
export class PersonModule { }
