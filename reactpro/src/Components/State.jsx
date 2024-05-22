import { useState } from "react";

export default function State(params) {
  const [count, setCount] = useState(0); //use state hook sets the starting count and resets the value to start count when the browser is refreshed
  const [incrementBy, setincrementBy] = useState(1);
  function increment() {
    // setCount(count + 1);
    setCount(count + incrementBy);
  }
  function decrement() {
    //setCount(count - 1);
    setCount(count - incrementBy);
  }
  function increaseIncreamentBy() {
    setincrementBy(incrementBy + 1);
  }
  function decreaseIncreamentBy() {
    setincrementBy(incrementBy - 1);
  }
  return (
    <div>
      <h1> The count is {count}</h1>
      <button onClick={increment}> Increament</button>
      <button onClick={decrement}> Decrement</button>

      <h1> Increase coount by {incrementBy}</h1>
      <button onClick={increaseIncreamentBy}> Increase increament</button>
      <button onClick={decreaseIncreamentBy}> Decrease increament</button>
    </div>
  );
}
