import type { TaskType } from '../types/Types'; // TaskType interface import

// Props Interface is only receive the tasks to display so many completed tasks exist
// and the function to delete all completed tasks
interface Props {
  tasks: TaskType[];
  onDeleteAllCompleted: () => void;
}

export default function DeleteAllCompletedTasks({
  tasks,
  onDeleteAllCompleted,
}: Props) {
  // HTML structure, finds which tasks are completed and display them,
  // it also has a button that, when is clicked, deletes all completed tasks
  return (
    <div>
      <small>
        {tasks.filter((task: TaskType) => !task.completed).length} tareas
        pendientes
      </small>
      <button onClick={onDeleteAllCompleted}>Borrar completas</button>
    </div>
  );
}
