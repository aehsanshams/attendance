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
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">React Counter</h1>
      <input
        type="number"
        value={initialValue}
        onChange={updateInitialValue}
        className="border p-2 rounded mb-4 text-center"
      />
      <p className="text-2xl mb-4">Count: {count}</p>
      <div className="flex gap-4">
        <button onClick={increase} className="bg-green-500 text-white px-4 py-2 rounded">+1</button>
        <button onClick={decrease} className="bg-red-500 text-white px-4 py-2 rounded">-1</button>
        <button onClick={reset} className="bg-blue-500 text-white px-4 py-2 rounded">Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;