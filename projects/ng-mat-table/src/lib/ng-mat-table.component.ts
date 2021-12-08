import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, Type, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'NgMatTable',
  templateUrl: './ng-mat-table.component.html',
  styles: [ 
  ]
})
export class NgMatTableComponent implements OnInit, AfterViewInit {
  title = 'MatTablePoc';
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @Input() displayedColumns: string[] = []
  @Input() headerTitle: any = {}
  @Input() elementData: any[] = []
  @Output() selectionChange: EventEmitter<any[]> = new EventEmitter();


  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<any>(this.allowMultiSelect, this.initialSelection);

  @ViewChild('matPaginator') paginator!: MatPaginator;
 

  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.elementData);
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));

  }

  rowSelected(row:any) {
    this.selection.toggle(row)
    this.selectionChange.emit(this.selection.selected)
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}

