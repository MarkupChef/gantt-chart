import React, {FC} from 'react';
import {Task as TaskInterface} from "../../App";
import Task from "./Task";

interface TaskListProps {
  tasks : TaskInterface[];
}

const TaskList:FC<TaskListProps> = ({tasks}) => {
  return (
    <div>
      <ul style={{listStyle: "none", padding: 0, margin: 0}}>
        {tasks.map((task, i) => (
          <li key={`task${i}`}>
            <Task name={task.name} color={task.color} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;