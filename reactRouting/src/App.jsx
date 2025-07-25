import { useState } from "react";
import Components from './components/Components.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Nav from './components/Nav.jsx';
import Child from "./components/child.jsx";
import { createBrowserRouter, RouterProvider ,Outlet } from "react-router-dom";

const r = createBrowserRouter([
  {
    path:'/',
    element:
    <div>
      <Home></Home>
      <Nav></Nav>
      <Outlet/>
    </div>,
    children:[
      {
        path:'child',
        element:<Child/>
      }
    ]
  },
  {
    path:'/about',
    element:
    <div>
      <About></About>
      <Nav></Nav>
    </div>
  },
  {
    path:'/components',
    element:<Components/>
  },
])

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <RouterProvider router = {r}></RouterProvider>
    </>
  );
}

export default App;
