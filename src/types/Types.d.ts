// TaskType Interface contains all the properties of a Task
export interface TaskType {
  id: string;
  name: string;
  completed: boolean;
}

// The TaskProps interface contains a task with TaskType properties
// and two functions that receive an ID and do not return anything.
export interface TaskProps {
  task: TaskType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}
