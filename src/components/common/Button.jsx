import React from "react";
import { Link } from "react-router-dom";

function Button({ url, text, color, children, className, ...rest }) {
  let buttonColor = "bg-secondary-700";
  if (color) {
    buttonColor = color;
  }

  const styled = `flex items-center ${buttonColor} rounded-2xl md:rounded-3xl ${className} px-10 py-2.5 md:px-4 md:py-4 border-2 border-black-700 justify-center`;

  return url ? (
    <Link
      to={url}
      type="button"
      className={styled}
      style={{ boxShadow: "5px 6px 0px 0px #000000" }}
      {...rest}
    >
      {text ? (
        <>
          <span className="font-extrabold text-black-700">{text}</span>
          <img
            className="w-[46px] h-[46px]"
            src={`/images/Frame 5 (3).svg`}
            alt=""
          />
        </>
      ) : (
        children
      )}
    </Link>
  ) : (
    <button
      type="button"
      className={styled}
      style={{ boxShadow: "5px 6px 0px 0px #000000" }}
      {...rest}
    >
      {text ? (
        <>
          <span className="font-extrabold text-black-700">{text}</span>
          <img
            className="w-[46px] h-[46px]"
            src={`/images/Frame 5 (3).svg`}
            alt=""
          />
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
