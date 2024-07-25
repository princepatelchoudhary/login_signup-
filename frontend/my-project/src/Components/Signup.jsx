import React from 'react'
import signupImg from "../assets/signup.png";
import Template from './Template';


function Signup({ setIsLoggedIn, setData}) {
  return (
    <Template
      title="Join the millions learning to code with Coding Raja Technologies for free"
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
      setData={setData}
    />
  );
}

export default Signup