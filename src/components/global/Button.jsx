// src/components/Button.jsx
import React from "react";

export default function Button({ children = "Log In", className = "", ...props }) {
  return (
    <button
      className={
        `h-[68px] flex justify-center items-center text-center 
         px-8 py-5 rounded-full text-white text-lg font-semibold leading-normal 
         bg-pink1 w-full hover:bg-darkblue transition-colors duration-200 ease-in-out ` 
         + className
      }
      {...props}
    >
      {children}
    </button>
  );
}
