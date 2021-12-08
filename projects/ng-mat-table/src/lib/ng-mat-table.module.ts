import { NgModule } from '@angular/core';
import { NgMatTableComponent } from './ng-mat-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    NgMatTableComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule
  ],
  exports: [
    NgMatTableComponent
  ]
})
export class NgMatTableModule { }
