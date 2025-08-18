export interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Pending' | 'In Progress' | 'Completed';
  category: 'Personal' | 'Work' | 'Other';
  dueDate: Date;
  creationDate: Date;
  lastModified: Date;
}
