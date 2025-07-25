import { useState } from 'react'
import './App.css'
import { useCallback } from 'react'






// 🔍 What React.memo does:
// It compares the previous props and current props using shallow comparison.

// If props are the same → ❌ No re-render

// If props changed → ✅ Re-render
// if we pass the funcion as prop and  if the function is changing in every render that means it is changing which ultimately implies that prop is changing and it will cause the component rerender again even with the react.memo ---references changed of the function


//but if it is just the value--references do not change--example like we pass a sting as the prop 
 
//to freeze the function to not let that rerender we use use call back
//let demo = useCallback(function,[dependency])---//returns the function


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <p> this is the useCallback</p>
    </>
  )
}

export default App
