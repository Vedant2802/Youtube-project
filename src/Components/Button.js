import React from "react";

const Button = (props) => {
  const { name } = props;
  return (
    <div>
      <button className="px-5 py-2 m-5 bg-gray-100 shadow-lg rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
