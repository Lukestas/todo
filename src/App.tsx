import { useId } from 'react';
import './App.css';
import Task from './components/Task';
import Footer from './components/Footer';
import useTask from './hooks/useTask';

function App() {
  const searchId = useId();
  const {
    addNewTask,
    tasks,
    changeTaskStatus,
    newSearching,
    filteredTasks,
    deleteTask,
    deleteCompletedTasks,
  } = useTask();

  const handleSearchTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchingTerm = e.target.value;
    newSearching(newSearchingTerm);
  };

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const task = formData.get(searchId);
    if (task) {
      addNewTask(task as string);
    }
    e.currentTarget.reset();
  };

  return (
    <main>
      <h1>Lista de tareas</h1>
      <section>
        <form onSubmit={handleAddTask}>
          <input
            type='text'
            name={searchId}
            onChange={handleSearchTask}
            placeholder='¿Qué tarea esta pendiente?'
          />
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='icon icon-tabler icons-tabler-outline icon-tabler-plus'
            >
              <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
              />
              <path d='M12 5l0 14' />
              <path d='M5 12l14 0' />
            </svg>
          </button>
        </form>
        <ul>
          {filteredTasks.map((task, i) => (
            <Task
              key={i}
              task={task}
              onToggle={changeTaskStatus}
              onDelete={deleteTask}
            />
          ))}
        </ul>
        <div>
          <small>
            {tasks.filter((task) => !task.completed).length} tareas pendientes
          </small>
          <button onClick={deleteCompletedTasks}>Borrar completas</button>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
