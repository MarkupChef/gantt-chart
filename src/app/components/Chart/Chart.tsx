import React, {FC} from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactGantt from "gantt-for-react";
import {Task} from "../../App";



interface ChartProps {
  tasks : Task[];
}

const Chart:FC<ChartProps> = ({tasks}) => {

  return (
    <div>
      <ReactGantt tasks={tasks} viewMode={"Day"} />
    </div>
  );
};

export default Chart;