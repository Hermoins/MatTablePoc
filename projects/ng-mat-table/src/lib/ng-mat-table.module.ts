import { NgModule } from '@angular/core';
import { NgMatTableComponent } from './ng-mat-table.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    NgMatTableComponent,
  ],
  imports: [
    MatTableModule
  ],
  exports: [
    NgMatTableComponent
  ]
})
export class NgMatTableModule { }
