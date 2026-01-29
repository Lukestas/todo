import { useId } from 'react';
import './App.css';
import Task from './components/Task';
import Footer from './components/Footer';
import useTask from './hooks/useTask';

function App() {
  const searchId = useId(); // useId hook is used to get an unique Id that is not repeated in the project
  const {
    addNewTask,
    tasks,
    changeTaskStatus,
    newSearching,
    filteredTasks,
    deleteTask,
    deleteCompletedTasks,
  } = useTask(); // useTask is a custom hook; all logic about how tomanipulate the tasks data is there

  // handleSearchTask is to get the value in the "searchId" input, then calls a function in useTask to search tasks
  const handleSearchTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchingTerm = e.target.value;
    newSearching(newSearchingTerm);
  };

  // handleAddTask is to get all values in the form tag,
  // then gets the value in "searchId" input,
  // next calls a function in useTask to add a new task and finally clean the form
  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const task = formData.get(searchId);
    if (task) {
      addNewTask(task as string);
    }
    e.currentTarget.reset();
  };

  // HTML structure for this project, a title, form with a input,
  // button to add task, list with all task, text with pending tasks,
  // button to delete every completed task and a footer with a informative text
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
