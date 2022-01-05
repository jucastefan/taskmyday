import React from 'react'
import TaskList from './components/TaskList'
import TaskListContextProvider from './context/TaskListContext'
import classes from './App.module.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'

const App = () => {
  return (
    <TaskListContextProvider>
      <div className={`${classes.App} d-flex flex-column `}>
        <Header />
        <TaskForm/>
        <TaskList />
      </div>
    </TaskListContextProvider>
  )
}

export default App
