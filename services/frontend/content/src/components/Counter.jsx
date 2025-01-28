import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 2);
    }

    return (
        <>
        <h1>count: {count}</h1>
        <button onClick={increment}>Increment</button>
        </>
    );
}

export default Counter;