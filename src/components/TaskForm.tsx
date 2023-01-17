import {ChangeEvent, FormEvent, useState} from 'react'
import { Task } from './interfaces/Task';

type HandleInputChange = ChangeEvent <HTMLInputElement | HTMLTextAreaElement>;

interface Props {
  addNewTask: (task: Task) => void;
}

export default function TaskForm({ addNewTask }: Props) {
  
  const [task, setTask] = useState({
    title: "",
    description: ""
  })

  const handleInputChange = ({ target:{name, value}} :HandleInputChange) => {
    setTask({...task,[name]: value})
  }

  const handleNewTask = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('dasd');
  }

  return (
    <div className="flex flex-col bg-slate-600 p-2 rounded-sm ">
      <h1 className="text-2xl text-white m-2">Add Task</h1>

      <form onSubmit={handleNewTask} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          placeholder="Write a title"
          className="rounded-sm p-1"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Write a description"
          name="description"
          rows={2}
          className="roundes-sm mb-2 "
          onChange={handleInputChange}
        />
        <button className="rounded-sm border-0 p-1 bg-white">Save</button>
      </form>
    </div>
  );
}
