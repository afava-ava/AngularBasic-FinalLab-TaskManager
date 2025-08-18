import { Task } from "./task";

export const MOCK_TASKS : Task[] = [
    {
    id: 1,
    title: 'Finish Angular Lab',
    description: 'Complete module 2 with Tailwind table',
    status: 'In Progress',
    priority: 'High',
    category: 'Work',
    dueDate: new Date('2025-08-20'),
    creationDate: new Date('2025-08-15'),
    lastModified: new Date('2025-08-17')
  },
  {
    id: 2,
    title: 'Buy groceries',
    description: 'Milk, eggs, bread, fruits',
    status: 'Pending',
    priority: 'Medium',
    category: 'Personal',
    dueDate: new Date('2025-08-19'),
    creationDate: new Date('2025-08-16'),
    lastModified: new Date('2025-08-16')
  },
  {
    id: 3,
    title: 'Plan weekend trip',
    description: 'Decide destination, book hotel, pack essentials',
    status: 'Pending',
    priority: 'Low',
    category: 'Personal',
    dueDate: new Date('2025-08-25'),
    creationDate: new Date('2025-08-17'),
    lastModified: new Date('2025-08-17')
  },
  {
    id: 4,
    title: 'Team meeting preparation',
    description: 'Prepare slides for sprint review and gather feedback',
    status: 'In Progress',
    priority: 'High',
    category: 'Work',
    dueDate: new Date('2025-08-21'),
    creationDate: new Date('2025-08-14'),
    lastModified: new Date('2025-08-17')
  },
  {
    id: 5,
    title: 'Pay electricity bill',
    description: 'Check amount due and pay online before deadline',
    status: 'Completed',
    priority: 'Medium',
    category: 'Other',
    dueDate: new Date('2025-08-10'),
    creationDate: new Date('2025-08-01'),
    lastModified: new Date('2025-08-11')
  }
];
