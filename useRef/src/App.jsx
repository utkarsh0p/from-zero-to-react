import { useState,useRef } from 'react'
import './App.css'

function App() {
  const [val, setValue] = useState(0)
  const value = useRef(val)
  const changeText = useRef()
  return (
    <>
       <button onClick={()=>{
        changeText.current.innerHTML = "Hi there this is changed text"
        value.current = value.current + 1
        setValue(val=>val+1)
       }}>vlaue is : {val}</button>
       <div ref={changeText}>This color will be changed</div>
    </>
  )
}

export default App
