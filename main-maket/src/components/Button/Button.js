import React from "react";

export default function Button({
  children,
  label,
  size = 40,
  bgColor,
  onClickFunction,
}) {
  return (
    <button
      style={{ padding: `${size}px`, backgroundColor: bgColor }}
      onClick={onClickFunction}
      //   onMouseOver={() => onClickFunction(label)}
    >
      {children ? children : label}
    </button>
  );
}
