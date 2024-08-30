import { useState, useEffect } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) =>{
    console.log(task);
    setTasks([...tasks, {id: Date.now(), text:task, completed: false, date: new Date()}])
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed} :task
    ))
  }

  const deleteTask = (id) => {
    let filtered = tasks.filter(task => task.id !== id)
    setTasks(filtered)

    //force store
    localStorage.setItem('tasks' , JSON.stringify(filtered));
  };

  //store process
  useEffect(() => {
    if(tasks.length !== 0){
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  // consume process
  useEffect(() => {
    let previousTasks = JSON.parse(localStorage.getItem('tasks'))

    setTasks(previousTasks)
  }, [])



  return (
    <div className="App">
      <h1 style={{textAlign: 'center' , color: '#43B2E2'}}>RPN Todo List</h1>
      <AddTask onAdd={addTask} />
      <TodoList tasks={tasks} onToggle= {toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
