import React, { useState, useRef } from "react";
import CharacterForm from "./CharacterForm";
import CharacterView from "./CharacterView";

export default function Characters() {
  const [charaterName, setCharacterName] = useState("");
  const colorRef = useRef(null);

  const handleChange = (name) => {
    setCharacterName(name);
    colorRef.current.style.backgroundColor = "red";
  };

  const timer = () => {
    setTimeout(() => {
      colorRef.current.style.backgroundColor = "green";
    }, 7000);
  };
  timer();

  return (
    <>
      <CharacterForm onSearch={handleChange} />
      <CharacterView hero={charaterName} bgColor={colorRef} />
    </>
  );
}
