import Button from "../UI/Button";

const Task = (props) => {
    const {task, deleteTask} = props
  return (
      <div>
          {task.title}
          <Button callBack={() => deleteTask(task.id)}>Delete</Button>
      </div>
  )
}
export default Task