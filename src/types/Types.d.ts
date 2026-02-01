// TaskType Interface contains all the properties of a Task
export interface TaskType {
  id: string;
  name: string;
  completed: boolean;
}

// The TaskProps interface contains a task with TaskType properties
// and two functions that receive an ID and do not return anything.
// This is just for one task
export interface TaskProps {
  task: TaskType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

// The TaskListProps contains a tasks list and two functions
// that receive and ID and don't return anything
export interface TasksListProps {
  tasks: TaskType[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

// The PaginationProps contains the current page, total pages
// and a function that receive the page number to navigate to.
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
