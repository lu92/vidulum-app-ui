import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { RagStatus } from '../../model/RagStatus';
import { Priority } from '../../model/Priority';
import { Task } from '../../model/Task';

const TASKS: Task[] = [
    {taskId : "9bb35d32-d516-44d9-a773-366ab4623b3b", createdBy: "MANUAL", userId : "lu92", name: 'Task1', description: "Hello world", isFavourite: true, isViewed: true, status : "Open", portfolioName: "PM portfolio",priority: Priority.Highest, rag: RagStatus.RED, created: new Date(2018, 0O5, 0O5, 17, 23, 42, 11), dueDate: new Date(2018, 0O5, 0O5, 17, 23, 42, 11)},
    {taskId : "a6cb3b92-f751-4a1d-abfd-cc0b1c3c8f89", createdBy: "Rule: 1234556", userId : "lu92", name: 'Task1', description: "Hello world", isFavourite: false, isViewed: true, status : "Open", portfolioName: "crypto portfolio",priority: Priority.High, rag: RagStatus.AMBER, created: new Date(2018, 0O5, 0O5, 17, 23, 42, 11), dueDate: new Date(2018, 0O5, 0O5, 17, 23, 42, 11)},
    {taskId : "2452b778-a58d-45b6-81c7-c5bfb5a5a772", createdBy: "MANUAL", userId : "lu92", name: 'Task2', description: "Hello world", isFavourite: false, isViewed: false, status : "Open", portfolioName: "ETF portfolio",priority: Priority.Medium, rag: RagStatus.RED, created: new Date(2018, 0O5, 0O5, 17, 23, 42, 11), dueDate: new Date(2018, 0O5, 0O5, 17, 23, 42, 11)},
    {taskId : "16c78fb8-d55b-4ba6-a299-4d4ef3d37768", createdBy: "Rule: 1234557", userId : "lu92", name: 'Task3', description: "Hello world", isFavourite: true, isViewed: false, status : "Open", portfolioName: "Stock portfolio",priority: Priority.Low, rag: RagStatus.GREEN, created: new Date(2018, 0O5, 0O5, 17, 23, 42, 11), dueDate: new Date(2018, 0O5, 0O5, 17, 23, 42, 11)},
    {taskId : "ce081cf4-1641-4384-b13e-d30fb4d08389", createdBy: "Rule: 1234558", userId : "lu92", name: 'Task3', description: "Hello world", isFavourite: false, isViewed: true, status : "Open", portfolioName: "retirement portfolio", priority: Priority.Lowest, rag: RagStatus.NO_COLOR, created: new Date(2018, 0O5, 0O5, 17, 23, 42, 11), dueDate: new Date(2018, 0O5, 0O5, 17, 23, 42, 11)}
];

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   displayedColumns: string[] = ['rag', 'select','star', 'menu', 'visibility', 'taskId', 'createdBy', 'priority', 'userId', 'name', 'status', 'portfolio', 'created'];
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
