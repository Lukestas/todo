import { useEffect, useState } from 'react'; // useState and useEffect hooks import
import TasksDefault from '../data/tasksDefault.json'; // Tasks Default import from tasksDefault.json file
import type { TaskType } from '../types/Types'; // TaskType interface import

const totalResultsPerPage = 5; // It's the total number of tasks per page, used to calculate the total number of pages and which task should be displayed.

// useTask is a custom hook to manipulate all about tasks as delete one or every completed,
// get a text to search a tasks with that term, add a new task and change status task
export default function useTask() {
  const [tasks, setTasks] = useState<TaskType[]>(() => {
    try {
      const storedTasks = localStorage.getItem('tasks');
      return storedTasks ? JSON.parse(storedTasks) : TasksDefault;
    } catch {
      return TasksDefault;
    }
  }); // Initial tasks list from the local storage or tasksDefault file
  const [searching, setSearching] = useState(''); // Initial searchTerm to search
  const [currentPage, setCurrentPage] = useState(1); // Initial currentPage is always 1

  // This useEffect is to save the task list to local storage when the tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // setSearchTerm is a function that receive a text to change the searching value and for later filter tasks
  const setSearchTerm = (newSearchTerm: string) => {
    setSearching(newSearchTerm);
  };

  // changeCurrentPage is a function that receive a number and changes the currentPage with it.
  const changeCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  // filteredTasks is the list that be sent to display,
  // it function search tasks that have a name equals the searching
  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searching.toLowerCase()),
  );

  // totalPages is a mathemattical operation to obtain the number of pages needed
  const totalPages = Math.ceil(filteredTasks.length / totalResultsPerPage);

  // paginatedTasks takes a piece of the task list and sends it to be displayed
  const paginatedTasks = filteredTasks.slice(
    (currentPage - 1) * totalResultsPerPage,
    currentPage * totalResultsPerPage,
  );

  // deleteTask is a function that receive an ID
  // to declare a new task list with out the task that have that id
  const deleteTask = (id: string) => {
    const newTasks: TaskType[] = tasks.filter((task) => {
      const matchId = task.id !== id;
      return matchId;
    });
    setTasks(newTasks);
    setCurrentPage(1);
  };

  // changeTaskStatus receive an ID
  // to declare a new task list with every task but this function
  // find the task with the same id to change it status
  const changeTaskStatus = (id: string) => {
    const newTasks: TaskType[] = tasks.map((task) => {
      if (task.id !== id) return task;
      const updatedTask: TaskType = {
        id: task.id,
        name: task.name,
        completed: !task.completed,
      };
      return updatedTask;
    });
    setTasks(newTasks);
  };

  // addNewTask receive a text about the new task,
  // then to create a new task crypto.randomUUID will generate a ID,
  // will assign the text to the name and finally the status be false,
  // next this the tasks list is declare with values of task list
  // and the new task, finally the searchterm is declare empty to show
  // everytasks
  const addNewTask = (name: string) => {
    const newTask: TaskType = {
      id: crypto.randomUUID(),
      name,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setSearching('');
    setCurrentPage(1);
  };

  // deleteCompletedTasks is a function that find the completed tasks and
  // declare a new task list with out that tasks
  const deleteCompletedTasks = () => {
    const newTasks: TaskType[] = tasks.filter((task) => !task.completed);
    setTasks(newTasks);
    setCurrentPage(1);
  };

  // Finally, all functions will be sent for use.
  return {
    addNewTask,
    tasks,
    paginatedTasks,
    currentPage,
    totalPages,
    setSearchTerm,
    changeTaskStatus,
    deleteTask,
    deleteCompletedTasks,
    changeCurrentPage,
  };
}
