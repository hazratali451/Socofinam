// src/components/Button.jsx
import React from "react";
import { cn } from "../../utils/cn";

export default function Button({
  children = "Log In",
  className = "",
  variant = "primary", // default style
  ...props
}) {
  const baseStyles = `
    h-[68px] flex justify-center items-center text-center 
    px-8 py-5 rounded-full text-lg font-semibold leading-normal 
    transition-colors duration-200 ease-in-out w-full
  `;

  const variants = {
    primary: "bg-pink1 text-white hover:bg-darkblue",
    outline: "border border-black1/10 font-medium text-black1 bg-fadedWhite hover:bg-darkblue hover:text-white",
    // secondary: "bg-darkblue text-white hover:bg-pink1",
    // you can add more variants here
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
