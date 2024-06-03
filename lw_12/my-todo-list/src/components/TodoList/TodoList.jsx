import "./TodoList.css";
import Task from "../Task/Task";


const TodoList = ({ tasks = [], color = "azure", setTasks }) => {

  const handleDeleteClick = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <ul className="todo-list" style={{ backgroundColor: color }}>
      {tasks.map((task, index) => (
        <Task key={index} text={task.text} handleClick={() => handleDeleteClick(task.id)} />
      ))}
    </ul>
  );
};

export default TodoList;