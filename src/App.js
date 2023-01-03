import {useState} from "react";
import Panel from "./components/Panel";
import Button from "./UI/Button";

function App() {
  const intialState = [
    {id: Math.random(), title: 'Liverpool', openDelete: false, openUpdate: false},
    {id: Math.random(), title: 'Vancouver', openDelete: false, openUpdate: false},
    {id: Math.random(), title: 'Los Alto', openDelete: false, openUpdate: false},
    {id: Math.random(), title: 'Honolupu', openDelete: false, openUpdate: false},
  ]
  const [tasks, setTasks] = useState(intialState)
  const [newTask, setNewTask] = useState('')
  const deleteTask = (id) => {
    setTasks(tasks.filter(task =>  task.id !== id))
  }
  const addNewTask = () => {
    setTasks([...tasks, {id: Math.random(), title: newTask, openDelete: false, openUpdate: false}])
    setNewTask('')
  }
  return (
    <div>
      <input placeholder='I`m waiting new task' value={newTask} onChange={event => setNewTask(event.target.value)}/>
      <Button callBack={addNewTask}>Add task</Button>
      {tasks.map(task => <Panel key={task.id} task={task} deleteTask={deleteTask} />)}
    </div>
  );
}

export default App;
