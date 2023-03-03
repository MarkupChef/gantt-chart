import React, {FC} from 'react';
import './Task.scss';

interface TaskProps {
  name: string;
  color: string;
}

const Task:FC<TaskProps> = ({name, color}) => {
  return (
    <div className={'task'}>
      <div className="task-color" style={{backgroundColor: color}}></div>
      {name}
    </div>
  );
};

export default Task;