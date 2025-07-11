import React from 'react'

const Box = (props) => {
    let cc=props.randomColor
  return(
    <>
      <div className="box" onClick={()=>{
        props.changeColor();
      }} style={{backgroundColor:`rgb(${props.backgroundColor})`}}>
         <button onClick={(e)=>{
            e.stopPropagation()
            props.setBackgroundColor(cc())
            }}>
            Cick to change background
         </button>
         <p>Box clicked {props.value} times</p>
      </div>
    </>
  )
}

export default Box