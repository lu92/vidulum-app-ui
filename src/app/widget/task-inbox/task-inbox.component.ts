import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

enum Priority {
  Highest,
  High,
  Medium,
  Low,
  Lowest
}
export interface Task {
  taskId: string;
  userId: string;
  name: string;
  description: string;
  isFavourite: boolean;
  status: string;
  priority: Priority;
  created: Date;
  dueDate: Date;
}
  const TASKS: Task[] = [
    {taskId : "T101", userId : "lu92", name: 'Task1', description: "Hello world", isFavourite: true, status : "Open", priority: Priority.Highest, created: new Date(2018, 0O5, 0O5, 17, 23, 42, 11), dueDate: new Date(2018, 0O5, 0O5, 17, 23, 42, 11)},
    {taskId : "T101", userId : "lu92", name: 'Task1', description: "Hello world", isFavourite: false, status : "Open", priority: Priority.High, created: new Date(2018, 0O5, 0O5, 17, 23, 42, 11), dueDate: new Date(2018, 0O5, 0O5, 17, 23, 42, 11)},
    {taskId : "T102", userId : "lu92", name: 'Task2', description: "Hello world", isFavourite: false, status : "Open", priority: Priority.Medium, created: new Date(2018, 0O5, 0O5, 17, 23, 42, 11), dueDate: new Date(2018, 0O5, 0O5, 17, 23, 42, 11)},
    {taskId : "T103", userId : "lu92", name: 'Task3', description: "Hello world", isFavourite: true, status : "Open", priority: Priority.Low, created: new Date(2018, 0O5, 0O5, 17, 23, 42, 11), dueDate: new Date(2018, 0O5, 0O5, 17, 23, 42, 11)},
    {taskId : "T103", userId : "lu92", name: 'Task3', description: "Hello world", isFavourite: false, status : "Open", priority: Priority.Lowest, created: new Date(2018, 0O5, 0O5, 17, 23, 42, 11), dueDate: new Date(2018, 0O5, 0O5, 17, 23, 42, 11)}
  ];

@Component({
  selector: 'task-inbox',
  templateUrl: './task-inbox.component.html',
  styleUrls: ['./task-inbox.component.scss']
})
export class TaskInboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   displayedColumns: string[] = ['select', 'star', 'taskId', 'userId', 'name', 'status', 'priority', 'created', 'action'];
    dataSource = new MatTableDataSource<Task>(TASKS);
    selection = new SelectionModel<Task>(true, []);

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

}
