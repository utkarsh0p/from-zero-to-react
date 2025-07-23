import React from 'react'
import Child3 from './child3'
import { useContext } from 'react'
import {Utkarsh} from '../App'
const Child2 = () => {
  const gettedValue = useContext(Utkarsh)
  return (
    <>
    <button>Child2  {gettedValue }</button>
    <Child3/>
    </>
  )
}

export default Child2