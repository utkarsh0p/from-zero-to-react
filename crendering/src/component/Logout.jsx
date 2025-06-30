import React from 'react'

const Logout = (props) => {
  return (
    <>
     <button onClick={()=>{
        props.setStatus(!props.status)
     }}>Logout</button>
    </>
  )
}

export default Logout