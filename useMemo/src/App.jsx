import { useState , useMemo} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let num = 6
  function expensiveFunction(num){
    return num*num
  }
  let expensiveValue = useMemo(()=>expensiveFunction(num),[num])//run again only when the num change if num is eual to the previous value give the same again not run agan
  return (
    <>
      <button>{expensiveValue}</button>
    </>
  )
}

export default App
