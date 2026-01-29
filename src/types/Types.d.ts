export interface TaskType {
  id: string;
  name: string;
  completed: boolean;
}

export interface TaskProps {
  task: TaskType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}
