import { useState } from "react";
import "./App.css";
import Box from "./components/box.jsx";
function App() {
  return (
    <>
      <div className="container">This is container and this is</div>
      <Box name="utkarsh">
        <p>hello this is childeren in the box</p>
      </Box>
      <Box name="mahesh" />
      <Box name="priyansu" />

      {/*passing function to the parent  */}
      {/* the same way that we pass the normal key values it also done*/}
    </>
  );
}

export default App;
