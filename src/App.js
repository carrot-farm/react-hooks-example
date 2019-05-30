import React, { useState } from "react";

import Counter from "./Counter";
import CounterUseReducer from "./CounterUseReducer";
import Info from "./Info";
import InfoUseReducer from "./InfoUseReducer";
import ContextSample from "./ContextSample";
import Average from "./Average";
import AverageUseRef from "./AverageUseRef";
import InfoCustomHook from "./InfoCustomHook";
import UsePromiseSample from "./UsePromiseSample";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <Counter />
      <hr />
      <CounterUseReducer />
      <hr />
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      {visible && <Info />}
      <hr />
      <InfoUseReducer />
      <hr />
      <ContextSample />
      <hr />
      <Average />
      <hr />
      <AverageUseRef />
      <hr />
      <InfoCustomHook />
      <hr />
      <UsePromiseSample />
    </div>
  );
}

export default App;
