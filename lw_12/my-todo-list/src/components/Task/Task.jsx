import { useEffect} from "react";
import "./Task.css";


const Task = ({ text, handleClick }) => {

return (
  <li className="task">
    <span onClick={handleClick} className="close-button">
      x
    </span>{" "}
    {text}
  </li>
);
};

export default Task;