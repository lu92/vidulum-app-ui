import { Component, OnInit } from '@angular/core';
import { InboxService } from '../../services/inbox.service';
import { Task } from '../../model/Task';

@Component({
  selector: 'app-inbox-page',
  templateUrl: './inbox-page.component.html',
  styleUrls: ['./inbox-page.component.scss']
})
export class InboxPageComponent implements OnInit {

  public pendingTasks: Task[] = [];
  private inboxService: InboxService;

  constructor(private inboxDataService: InboxService) {
    this.inboxService = inboxDataService;
    this.pendingTasks = this.inboxService.getPendingTasks();
    console.log('Pending tasks loaded!', this.pendingTasks.length);
  }

  ngOnInit(): void {
  }

}
