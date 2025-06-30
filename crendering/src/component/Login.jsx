import React from "react";

const Login = (props) => {
  return (
    <>
    <button onClick={()=>{
        props.setStatus(!props.status)
    }}>Log in</button>
    </>
  )
};

export default Login;
