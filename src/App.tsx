import { useId, useState } from 'react'
import './App.css'
import Task from './components/Task'
import TasksDefault from "./tasksDefault.json"
import Footer from './components/Footer'

interface TaskType {
  id: string
  name: string
  completed: boolean
}

function App() {
  const [tasks, setTasks] = useState(TasksDefault)
  const [search, setSearch] = useState('')
  const searchId = useId()

  const handleChangeTaskStatus = (id: string) => {
    setTasks(prevTasks =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const handleSearchTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const task = formData.get(searchId)
    const newTask: TaskType = {
      id: crypto.randomUUID(),
      name: task as string,
      completed: false
    }
    setTasks(prev => [...prev, newTask])
    setSearch('')
    e.currentTarget.reset()
  }

  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleDeleteTask=(id:string)=>{
    setTasks(tasks.filter(task=>task.id!==id))
  }

  return (
    <main>
      <h1>Lista de tareas</h1>
      <section>
        <form onSubmit={handleAddTask}>
          <input type="text" name={searchId} onChange={handleSearchTask} placeholder='¿Qué tarea esta pendiente?' />
          <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg></button>
        </form>
        <ul>
          {filteredTasks.map((task, i) => <Task key={i} task={task} onToggle={handleChangeTaskStatus} onDelete={handleDeleteTask}/>)}
        </ul>
        <div>
          <small>{tasks.filter(task => !task.completed).length} tareas pendientes</small>
          <button >Borrar completas</button>
        </div>
      </section>
      <Footer/>
    </main>
  )
}

export default App
