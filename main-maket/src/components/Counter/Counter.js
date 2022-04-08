import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import "./style.css";

let tmp = 33;

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [bool, setBool] = useState(false);
  const numberRef = useRef(0);
  // useLayoutEffect(() => {
  //   console.log("useLayoutEffect");
  // }, []);
  useEffect(() => {
    console.log("same componentDidMount");
    numberRef.current = 23;
    setBool((state) => !state);
  }, []);

  useEffect(() => {
    console.log("same componentDidUpdate", { counter });
  }, [counter]);

  useEffect(() => {
    if (bool) {
      console.log("change BOOL");
      tmp += 100;
      console.log("change BOOL in useEffect", { tmp });
    }
  }, [bool]);

  useEffect(() => {
    console.log("tmp useEffect", { tmp });
  }, [tmp]);

  useEffect(() => {
    console.log("useEffect no dependecies", { counter, bool, tmp });
  });

  useEffect(() => {
    return () => {
      console.log("same componentWillUnmount");
    };
  }, []);

  const handler = (type) => {
    type === "IncrementI"
      ? setCounter((state) => state + 1)
      : setCounter((state) => state - 1);
  };

  const handlerRef = (type) => {
    type === "Increment"
      ? (numberRef.current = numberRef.current + 1)
      : (numberRef.current = numberRef.current - 1);
  };

  return (
    <div className="counter_block">
      <div className="counter_block-text">{counter}</div>

      <button type="button" onClick={() => handler("Increment")}>
        Increment
      </button>
      <button type="button" onClick={() => handler("Decrement")}>
        Decrement
      </button>
      <div className="counter_block-text">{numberRef.current}</div>
      <button type="button" onClick={() => handlerRef("Increment")}>
        REF+
      </button>
      <button type="button" onClick={() => handlerRef("Decrement")}>
        REF-
      </button>
      <div className="counter_block-text">{tmp}</div>
      <button
        type="button"
        onClick={() => {
          tmp += 1;
          console.log({ tmp });
        }}
      >
        TMP+
      </button>
      <button
        type="button"
        onClick={() => {
          tmp += 10;
          console.log({ tmp });
        }}
      >
        TMP+10
      </button>
    </div>
  );
}
