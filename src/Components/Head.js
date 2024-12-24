import React from "react";
import { Hamburger_Icon, User_Icon, Youtube_Icon } from "../Constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const togglMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg items-center">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          src={Hamburger_Icon}
          alt="hamburger-icon"
          onClick={togglMenuHandler}
        />
        <img className="h-8 mx-2" src={Youtube_Icon} alt="youtube-logo" />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border-gray-500 p-2 rounded-l-full"
          type="text"
        />
        <button className="border-gray-500 border p-2 rounded-r-full bg-gray-200">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user-icon" src={User_Icon} />
      </div>
    </div>
  );
};

export default Head;
