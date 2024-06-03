import { useState } from "react";
import { nanoid } from 'nanoid'
import "./AddTask.css";


const AddTask = ({ setTasks = () => {}, tasks = [] }) => {
    const [inputValue, setInputValue] = useState("");
  
    return (
      <form type="submit">
        <input
          className="input-task"
          type="text"
          placeholder="Inserisci la tua task"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          className="button-task"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
              setTasks([...tasks, { id: nanoid(), text: inputValue }])
          }}
        >
          Insert
        </button>
      </form>
    );
  };
  
  export default AddTask;