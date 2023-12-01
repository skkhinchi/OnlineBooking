import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount]= useState(0);
    const increment=()=>
    {
        setCount(count+1);
    }
    const decrement=()=>
    {
        setCount(count-1)
    }
  return (
    <>
    <h2>Total Count : {count} </h2>
    <button onClick={increment}>Increment</button>

    <button onClick={decrement}>Decrement</button>
    </>
  )
}
