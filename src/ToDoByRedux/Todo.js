import React, { useState } from "react";
import "../App.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";


export const Todo = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);
  
    function addNewTask() {
      const task = inputRef.current.value.trim();
      if (task !== "") {
        dispatch(addTodo(task));
        inputRef.current.value = "";
      }
    }
  return (
    <div className="div1">
      <h2>Add Task in Redux App</h2>
      <input
          type="text"
          placeholder="Add task here..."
          ref={inputRef}
          className="taskInput"
        />
        <button onClick={addNewTask}>Add task</button>
      

      {

      }
    </div>
  );
};
