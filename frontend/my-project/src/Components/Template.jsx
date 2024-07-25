import React from "react";
import frame from "../assets/frame.png";
import SignupForm from "./SignupForm.jsx";
import LoginForm from "./LoginForm.jsx";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, image, formType, setIsLoggedIn, setData}) => {
  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between">
      <div className="w-11/12 max-w-[450px] mx-0 text-white">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>

        {formType === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} setData={setData} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} setData={setData}/>}
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frame}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"

        />
        <img
          src={image}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4 "
        />
      </div>
    </div>
  );
};

export default Template;