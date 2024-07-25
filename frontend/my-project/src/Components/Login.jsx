import React from 'react'
import loginImg from "../assets/login.png";
import Template from './Template';

function Login({ setIsLoggedIn , setData}) {
  return (
    <Template
      title="Welcome Back"
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
      setData={setData}
    />
  );
}


export default Login