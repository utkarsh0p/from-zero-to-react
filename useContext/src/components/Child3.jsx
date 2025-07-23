import React, { useContext } from 'react'
import {Utkarsh} from '../App'

const Child3 = () => {
    const valuereceived = useContext(Utkarsh)
  return (
    <button>Child3 {valuereceived}</button>
  )
}

export default Child3