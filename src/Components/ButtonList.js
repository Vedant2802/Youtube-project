import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ["All", "gaming", "songs", "Live", "Cricket", "Music", "Sports"];
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
