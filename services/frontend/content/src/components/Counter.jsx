// import React, {useState} from "react";

// function Counter() {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(count + 2);
//     }

//     return (
//         <>
//         <h1>count: {count}</h1>
//         <button onClick={increment}>Increment</button>
//         </>
//     );
// }

// export default Counter;

import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);
  const [initialValue, setInitialValue] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  const updateInitialValue = (e) => {
    const value = parseInt(e.target.value) || 0;
    setInitialValue(value);
    setCount(value);
  };

  return (
    <div className="">
      <h1 className="">React Counter</h1>
      <input
        type="number"
        value={initialValue}
        onChange={updateInitialValue}
        className=""
      />
      <p className="">Count: {count}</p>
      <div className="">
        <button onClick={increase} className="">+1</button>
        <button onClick={decrease} className="">-1</button>
        <button onClick={reset} className="">Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;