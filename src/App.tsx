import { useState } from 'react'
import './App.css'
import Logo  from './assets/react.svg'
import { Task } from './components/interfaces/Task'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

interface Props {
  title: string
}

function App({title}: Props) {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'lean React',
      description: 'learn React D',
      completed: false
    }
  ])

  const addNewTask = (task: Task) => setTasks([...tasks, task])

  return (
    <div className="h-[100vh] bg-slate-400">
      <nav className='bg-gray-900 text-white p-4'>
        <div className='container m-auto'>
          <a className='flex items-center gap-2'>
            <img src={Logo} alt="logo" />
            {title}
          </a>
        </div>
      </nav>

      <main className="container p-4 m-auto">
        <div className="flex gap-4">
          <div className=''>
            <TaskForm addNewTask={addNewTask} />
          </div>

          <div className=''>
            <div className='flex'>
              <TaskList task={tasks} />  
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default App
