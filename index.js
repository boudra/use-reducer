import React, { createContext, useContext, useReducer, useState } from "react";
import ReactDOM from "react-dom";

const root = document.querySelector("#root");

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "decrement_by":
      return state - action.count;
  }
}

const CounterContext = createContext(0);

function Counter() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <p>Count is {state}</p>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "decrement_by", count: count })}>
        Decrement by
      </button>
      <input
        type="text"
        value={count}
        onChange={e => setCount(e.target.value)}
      />
    </div>
  );
}

function App() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <CounterContext.Provider value={[state, dispatch]}>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </CounterContext.Provider>
  );
}

ReactDOM.render(<App></App>, root);
