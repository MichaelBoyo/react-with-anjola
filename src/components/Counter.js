import React from "react";
export default function Counter(){
   
  const [count, setCount] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const inputChangeHandler = (event) => {
    if(isNaN(event.target.value)){
      alert("please enter a number idiot")
      return
    }
    setValue(event.target.value);
  }

  const decrement = () => {
    setCount((count) => (count > 0 ? count - value : count));
  };
    return(
        <div class="max-w-sm m-5 rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Count is {count}</div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <div class="inline-flex">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="value"
            value={value}
            onChange={inputChangeHandler}
          />
            <button
              onClick={() => setCount((count) => count + 
                
                Number(value))}
              class="bg-green-500 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
              Increment
            </button>
            <button
              onClick={decrement}
              class="bg-red-500 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    )
}