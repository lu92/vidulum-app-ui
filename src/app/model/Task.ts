import { Priority } from './Priority';
import { RagStatus } from './RagStatus';

export interface Task {
  taskId: string;
  createdBy: string;
  userId: string;
  name: string;
  description: string;
  isFavourite: boolean;
  isViewed: boolean;
  status: string;
  portfolioName: string;
  priority: Priority;
  rag: RagStatus;
  created: Date;
  dueDate: Date;
}
