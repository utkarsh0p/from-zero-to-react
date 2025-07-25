import { useState ,useEffect} from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  
  useEffect(()=>{
    alert("it is about to mount");
    return(()=>{
      alert("this is unmounted" + count)
    })
  },[count])

//variation 0 --runs on every render
//  useEffect(()=>{
//   alert("this is the first render")
//  })

  // variation 1 -----dependency
  // useEffect(()=>{
  //   let p = document.createElement("p");
  //   p.innerHTML = `clicked ${count}`
  //   document.body.appendChild(p);
  // },[count])

  //variation 2
//  useEffect(()=>{
//   alert("this is the first render")
//  },[]) /* only runs for the first render */

//variation 3 -----multiple dependency

  // function increaseCount(){
  //    setCount(count=>count+1)
  // }

  return (
    <>
      {/* <p>When you click this butto n it increases </p>
       <button onClick = {increaseCount}> Click me {count}</button> */}
       <button onClick={()=>{setCount(count=>count+1)}}>Click me {count}</button>
    </>
  );
}

export default App;
