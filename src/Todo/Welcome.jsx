import React, { useState } from "react";
import "../App.css";

export const Welcome = () => {
  const [value, setValue] = useState("");
//   const [status,setStatus]=useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Study",
      status: false,
    },
    {
      id: 2,
      task: "Home work",
      status: true,
    },
  ]);
  const onSubmit = (a) => {
    const newTask = {
      id: Date.now(),
      task: a,
      status: false,
    };
    setTasks([...tasks, newTask]);
    setValue('');
  };

  const taskDone=(removeId)=>
  {
    setTasks(tasks.filter((task)=>task.id!==removeId));
  }

  const markDone = (id) => {
 
    setTasks(tasks.map((task)=>{
        if (task.id === id) return {...task,status:!task.status}
        else {
            return task;
        }
    }));
 
  };
  return (
    <div className="div1">
      <h2>Add Task</h2>
      
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" onClick={() => onSubmit(value)}>
        Submit
      </button>
      {tasks.map((item) => {
        return (
          <div>
            <p style={item.status ? {'color': 'green'}: {'color': 'red'} }>{item.task}</p>
            <button onClick={()=>{taskDone(item.id)}}> Remove </button>

            <button onClick={()=>{markDone(item.id)}}> Mark as Done</button>
          </div>
        );
      })}

      {

      }
    </div>
  );
};
