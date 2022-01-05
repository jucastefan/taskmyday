import React,{useContext} from 'react'
import { TaskListContext } from '../context/TaskListContext'

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
      <span>👉🏽{task.title}</span>
      <button
        type="button"
        class="btn btn-dark ms-auto btn-delete"
        onClick={() => removeTask(task.id)}
      >
        <i className="bi bi-trash"></i>
      </button>
      <button
        type="button"
        class="btn btn-dark btn-edit ms-3"
        onClick={() => findItem(task.id)}
      >
        <i className="bi bi-pencil"></i>
      </button>
    </li>
  )
}

export default Task
