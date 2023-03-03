import React from 'react';
import './App.scss';
import Chart from "./components/Chart";
import TaskList from "./components/TaskList";

const getTasks = [
  {
    id: "Task 1",
    name: "Redesign website",
    start: "2016-12-28",
    end: "2016-12-31",
    progress: 10,
    dependencies: "",
    color: '#ddd',
  },
  {
    id: "Task 2",
    name: "Redesign website",
    start: "2016-12-28",
    end: "2016-12-31",
    progress: 20,
    dependencies: "",
    color: '#ddd',
  },
  {
    id: "Task 3",
    name: "Redesign website",
    start: "2016-12-24",
    end: "2016-12-31",
    progress: 0,
    dependencies: "",
    color: '#ddd',
  }
];

export interface Task {
  id: string;
  name: string;
  start: string;
  end: string;
  progress: number;
  dependencies: string;
  color: string;
}

function App() {
  return (
    <div className="App">
      <div className={'side-bar'}>
        <div>
          <TaskList tasks={getTasks}/>
        </div>
        <div className={'chart'}>
          <Chart tasks={getTasks}/>
        </div>
      </div>
    </div>
  );
}

export default App;
