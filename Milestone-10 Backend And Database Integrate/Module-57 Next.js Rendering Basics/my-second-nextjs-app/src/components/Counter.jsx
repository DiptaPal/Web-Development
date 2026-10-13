'use client'

import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    console.log("counter value from counter component: ", counter);
    return (
        <div>
            <h2 className="text-5xl">Counter: {counter}</h2>
            <button onClick={() => setCounter(counter + 1)} className="bg-white text-black text-2xl rounded-md py-2 px-4">Increment</button>
        </div>
    );
};

export default Counter;