import { useState } from 'react'
import { createContext } from 'react' 
import './App.css'
import Child1 from './components/child1'
import Child2 from './components/child2'
const Utkarsh = createContext()
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h2>Use Context API or HOOK</h2>
      <p>Prop drilling is like passing the prop to the child function from the parent in aiming to pass it to some deeper child that is inside the child so for this we have to pass it to the child then the deeper child this make the prop available for all the childs but the purpose is to pass it only to the targetted child</p>
      <Utkarsh.Provider value = {count}>
        <Child1></Child1>
      </Utkarsh.Provider>
      <Child2/>
    </>
  )
}

export default App
export {Utkarsh}
