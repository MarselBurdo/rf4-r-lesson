import React from "react";

export default function Button({ label, size = 40, bgColor, onClickFunction }) {
  return (
    <button
      style={{ padding: `${size}px`, backgroundColor: bgColor }}
      onClick={() => onClickFunction(label)}
      //   onMouseOver={() => onClickFunction(label)}
    >
      {label}
    </button>
  );
}
