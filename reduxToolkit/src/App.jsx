import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment, decrement} from './features/counter/counterSlice'
function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  function increamentFunc(){
    dispatch(increment())
  }
  function decrementFunc(){
    dispatch(decrement())
  }
  return (
    <>
      <button  onClick={increamentFunc}>Click to increase </button>
      <button>Thevalue : {count} </button>
      <button onClick={decrementFunc}>Click to decrease</button>
    </>
  )
}

export default App
