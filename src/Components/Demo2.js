import React, { useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  const ref = useRef(0);
  // it gives a value like this
  /*
  ref={current:0}
  */
  let x = 0;
  return (
    <div className="m-4 p-2 border border-black w-96 h-96">
      <div>
        <button
          className="bg-green-200 px-2 m-4 rounded-lg"
          onClick={() => {
            x = x + 1;
            console.log("x = ", x);
          }}
        >
          Increase x
        </button>
        <span className="font-bold text-xl">State = {x}</span>
      </div>
      <div>
        <button
          className="bg-green-200 px-2 m-4 rounded-lg"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase y
        </button>
        <span className="font-bold text-xl">Let = {y}</span>
      </div>
      <div>
        <button
          className="bg-green-200 px-2 m-4 rounded-lg"
          onClick={() => {
            ref.current = ref.current + 1;
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
