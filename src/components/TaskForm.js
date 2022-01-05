import React, { useContext, useEffect, useState } from 'react'
import { TaskListContext } from '../context/TaskListContext'

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } = useContext(TaskListContext)

  const [title, setTitle] = useState('')

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!editItem) {
      addTask(title)
      setTitle('')
    } else {
      editTask(title, editItem.id)
    }
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
    } else {
      setTitle('')
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="d-flex container p-3">
      <input
        onChange={handleChange}
        value={title}
        className="form-control me-2"
        type="text"
        placeholder="Type your task here"
      />
      <button className="btn btn-dark" type="submit">
        {editItem ? 'Edit' : '➕Add'}
      </button>
      <button className="btn btn-dark ms-1" type="button" onClick={clearList}>
        🔄Clear
      </button>
    </form>
  )
}

export default TaskForm
