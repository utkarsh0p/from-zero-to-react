import "./App.css";
import React from "react";
import { useState } from "react";
import Box from "./components/box";
function App() {
  let a = "Box 1";
  let b = "Box 2";

  const [value, setVal] = useState(0);
  function increament() {
    setVal(value + 1);
  }

  return (
    <>
      {/* state lifting is syncing the state of all the childrens that is if we declare hook inn parent and then use it in the childen it will effect the main hook and state changes in all the childrens */}
      <Box name={a} value={value} setValue={setVal} increament={increament}>
        <p>--the children1 inside the {a}</p>
        <p>--the childre2 inside the {a}</p>
      </Box>
      <Box name={b} value={value} setValue={setVal} increament={increament}>
        <p>--the children1 inside the {b}</p>
        <p>--the childre2 inside the {b}</p>
      </Box>
    </>
  );
}

export default App;
