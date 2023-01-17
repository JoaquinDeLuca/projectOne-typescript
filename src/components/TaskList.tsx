import { Task } from "./interfaces/Task"
import TaskCard from "./TaskCard"

interface Props {
  task: Task[]
}

export default function TaskList({ task }:Props) {
  return (
    <>
      {task.map( task => <TaskCard key={task.id} task={task}/>)}
    </>
  )
}
