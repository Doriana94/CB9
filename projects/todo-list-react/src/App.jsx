import "./App.css";
import { useState} from "react";
import TodoList from "./components/TodoList/TodoList";
import AddTask from "./components/AddTask/AddTask";

const App = () => {
  const [tasks, setTasksList] = useState([]);

  return (
    <div>
      <h1 className='title'>Todo List</h1>
      <AddTask setTasks={setTasksList} tasks={tasks} />
      <div className="container">
        <TodoList tasks={tasks} color="white" setTasks={setTasksList} />
      </div>
    </div>
  );
};

export default App;
