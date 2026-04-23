"use client";

import { use, useState } from "react";

export default function Counter() {
    
    const [count, setCount] = useState(0)

    function increment(){
        setCount(count + 1);
    }
    function decrement(){
        setCount(count - 1);
    }
    function reset(){
        setCount(0);
    }
    return (
        <div className="w-100 mx-auto border mt-30  p-6 rounded-2xl h-50 bg-black">
            <p className="text-5xl text-center text-blue-500">{count}</p>

            <div className="flex justify-center gap-10 mt-4">
                <button onClick={decrement} className="p-2 px-5 font-bold text-white bg-green-500 text-2xl rounded-2xl">-</button>
                <button onClick={increment} className="p-2 px-5 font-bold text-white bg-red-500 text-2xl rounded-2xl">+</button>\
                <button onClick={reset} className="p-2 px-5 font-bold text-white bg-blue-500 text-2xl rounded-2xl">Reset</button>
            </div>
        </div>
    );
}