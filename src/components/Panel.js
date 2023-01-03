import Task from "./Task";

const Panel = (props) => {

    const {task, deleteTask} = props
    return (
        <div>
            <Task task={task} deleteTask={deleteTask}/>
        </div>
    )
}
export default Panel