import { Task } from "./interfaces/Task"

interface Props {
  task: Task;
}

export default function TaskCard({ task }:Props) {
  return (
    <div key={task.id} className='bg-yellow-200 rounded-sm p-4'>
      <p>{task.title}</p>
      <p>{task.description}</p>
      <button className="bg-white rounded-sm p-1">Delete</button>
    </div>

  )
}
