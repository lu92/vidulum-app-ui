import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { RagStatus } from '../../model/RagStatus';
import { Priority } from '../../model/Priority';
import { Task } from '../../model/Task';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input()
  tasks: Task[] = [];

  displayedColumns: string[] = [
  'rag', 'select','star', 'menu', 'visibility', 'taskId', 'createdBy', 'priority', 'userId', 'name', 'status', 'portfolio'
  ];
  selection = new SelectionModel<Task>(true, []);
  dataSource!: MatTableDataSource<Task>;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Task>(this.tasks);
  }


    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows() {
      if (this.isAllSelected()) {
        this.selection.clear();
        return;
      }

      this.selection.select(...this.dataSource.data);
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: Task): string {
      if (!row) {
        return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.taskId}`;
    }

    evalPriorityName(priority: Priority): string {
      return Priority[priority];
    }

    favouriteTaskClicked(task: Task) {
      const index = this.tasks.findIndex( element => {
        return element.taskId === task.taskId;
      });

      if (index !== -1 ) {
        const isFavourite = this.tasks[index].isFavourite;
        this.tasks[index].isFavourite = isFavourite ? false : true;
      }
    }
  checkboxSelected(task: Task) {
    console.log(task)
  }

}
