import React from "react"
import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import { addTask, removeTask } from './redux/todo/todo.actions'

const App = () => {
  
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch()
  
  const save = (e) => {
    e.preventDefault()
    dispatch(addTask(e.target.task.value))
  }

  const remove = (id) => {
    dispatch(removeTask(id))
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => save(e)}>
          <input type="text" name="task" />
          <button>Save</button>
        </form>
        <div>
          <ul>
            {tasks.map((item) => {
              return <li key={item.id}>{item.value} <button onClick={()=> {remove(item.id)}}>Remove</button></li>
            })}
          </ul>
        </div>
      </header>
    </div>
  )
}

export default App
