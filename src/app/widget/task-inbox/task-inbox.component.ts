import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface Task {
  taskId: string;
  userId: string;
  name: string;
  description: string;
  status: string;
  created: Date;
  dueDate: Date;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'task-inbox',
  templateUrl: './task-inbox.component.html',
  styleUrls: ['./task-inbox.component.scss']
})
export class TaskInboxComponent implements OnInit {

  constructor() { }

  tasks: Task[] = [
    {taskId : "1", userId : "lu92", name: 'Task1', description: "Hello world", status : "Open", created: new Date(), dueDate: new Date()},
    {taskId : "2", userId : "lu92", name: 'Task2', description: "Hello world", status : "Open", created: new Date(), dueDate: new Date()},
    {taskId : "3", userId : "lu92", name: 'Task3', description: "Hello world", status : "Open", created: new Date(), dueDate: new Date()}
  ];


  ngOnInit(): void {
  }

   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;
    clickedRows = new Set<PeriodicElement>();

}
