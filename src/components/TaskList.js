import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'
import Task from './Task'

const TaskList = (props) => {
  const { tasks } = useContext(TaskListContext)

  return (
    <div className="container">
      {tasks.length ? (
        <ul className="list-group shadow">
          {tasks.map((task) => {
            return <Task task={task} key={task.id} />
          })}
        </ul>
      ) : (
        <div className="text-white fs-3">
          <p>😴No tasks.</p>
        </div>
      )}
    </div>
  )
}

export default TaskList
