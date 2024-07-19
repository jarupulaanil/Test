import React, { useState } from "react";

export default function Increment() {
  const [state, setState] = useState(0);

  const increment = () => {
    // state=state+1,to update i the  state value we use the setstate function
    setState(state + 1);
  };

  const decrement = () => {
    setState(state - 1);
  };

  return (
    // change the properties of the function component can done using  event handlers
    <div>
      <h3>use state hooks called {state}</h3>
      <button onClick={increment}>Inc me</button>
      <button onClick={decrement}>dec me</button>
    </div>
  );
}
