import { useState } from 'react';
import TasksDefault from '../data/tasksDefault.json';
import type { TaskType } from '../types/Types';

export default function useTask() {
  const [tasks, setTasks] = useState<TaskType[]>(TasksDefault);
  const [searching, setSearching] = useState('');

  const newSearching = (newSearchTerm: string) => {
    setSearching(newSearchTerm);
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searching.toLowerCase()),
  );

  const deleteTask = (id: string) => {
    const newTasks: TaskType[] = tasks.filter((task) => {
      const matchId = task.id !== id;
      return matchId;
    });
    setTasks(newTasks);
  };

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

  const addNewTask = (name: string) => {
    const newTask: TaskType = {
      id: crypto.randomUUID(),
      name,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setSearching('');
  };

  const deleteCompletedTasks = () => {
    const newTasks: TaskType[] = tasks.filter((task) => !task.completed);
    setTasks(newTasks);
  };

  return {
    addNewTask,
    tasks,
    filteredTasks,
    newSearching,
    changeTaskStatus,
    deleteTask,
    deleteCompletedTasks,
  };
}
