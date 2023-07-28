import { useState } from 'react';
import React from 'react'
function App(){
    
    const [count, setCount]=useState(0)
    function decreaseHandler(){
        if(count<=0){
            setCount(0)
        }
        else{
        setCount(count-1)
        }
    }
    function increaseHandler(){
       setCount(count+1)
    
    }
    function resetHandler(){
       setCount(0)
    }
    return(
        <div class="bg-black h-[100vh] w-[100vw] text-white flex justify-center items-center gap-10 flex-col">
              <h1 class="text-2xl"> Increment & Decrement </h1>
                <div class="flex justify-between gap-10  bg-white rounded-md ">
                <button onClick={decreaseHandler} class=" p-3 bg-white text-2xl text-black" >-</button>
                <div class=" p-3 bg-white text-2xl text-black">{count}</div>
                <button onClick={increaseHandler} class=" p-3 bg-white text-2xl text-black">+</button>
                </div>

               <button onClick={resetHandler} class=" p-3 bg-sky-700 text-2xl text-black rounded-md"> Reset </button>
        </div>
    )
}
export default App;