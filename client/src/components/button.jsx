import React from "react";

const Button = ({
  label,
  color = "bg-primary",
  textColor = "text-white",
  type = "button",
  onClickFunction,
}) => {
  return (
    <div>
      <button
        type={type}
        className={`middle none center mr-3 rounded-lg ${color} py-3 px-3 font-sans text-sm ${textColor} w-32 transition-all hover:opacity-80 active:opacity-85 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
        data-ripple-dark="true"
        onClick={onClickFunction}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
