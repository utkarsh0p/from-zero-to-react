import { useState } from 'react'
import './App.css'
import Box from './components/box'

function App() {
  const[backgroundColor,setBackgroundColor] = useState("1003,130,131")
  const [count, setCount] = useState(0)
  function changeColor(){
    setCount(count=>count+1)
  }
  function randomColor(){
    let a = Math.floor(Math.random()*250)
    let b = Math.floor(Math.random()*250)
    let c = Math.floor(Math.random()*250)
    console.log("random color")
    return `${a},${b},${c}`
  }
  return (
    <>
      <p>hello how are you</p>
      <Box value={count} setValue={setCount} changeColor={changeColor} randomColor={randomColor} backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor}></Box>
    </>
  )
}

export default App
