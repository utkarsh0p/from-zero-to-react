import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Login from "./component/Login";
import Logout from "./component/Logout";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  if (isLoggedIn) {
    return <Logout status={isLoggedIn} setStatus={setLoggedIn} />;
  } else {
    return <Login status={isLoggedIn} setStatus={setLoggedIn} />;
  }
}

export default App;
