import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from '../student/student.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  exports:[StudentComponent

  ]
})
export class StudentModule { }
