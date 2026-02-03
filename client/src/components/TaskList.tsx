import type { TasksListProps } from '../types/Types';
import Task from './Task';
// TaskList receive a list of tasks, and two functions,
// the first function is to change the status task,
// and the second function is to delete that task
export default function TaskList({
  tasks,
  onToggle,
  onDelete,
}: TasksListProps) {
  // HTML structure, a list that display each task and sends
  // the information and two function to Task file to render the task
  return (
    <ul className='taskList'>
      {tasks.length === 0 && <p>No hay tareas</p>}
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
