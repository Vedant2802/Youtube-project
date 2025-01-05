import React, { useMemo, useState } from "react";
import { nthPrime } from "../utils/Helper";

const Demo = () => {
  const [inputText, setInputText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  //   const findPrime = nthPrime(inputText);
  //after using useMemo
  const findPrime = useMemo(() => nthPrime(inputText), [inputText]);
  //   console.log("Rendering......");
  return (
    <div
      className={
        "m-4 p-4 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="m-2 p-2 bg-green-200 rounded-lg"
          onClick={() => {
            setIsDarkTheme(!isDarkTheme);
          }}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black rounded-lg w-72 px-2"
          type="number"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
      </div>
      <div className="mt-4 font-bold">nth prime:{findPrime}</div>
    </div>
  );
};

export default Demo;
