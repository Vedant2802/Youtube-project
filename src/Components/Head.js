/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  Hamburger_Icon,
  SEARCH_API,
  User_Icon,
  Youtube_Icon,
} from "../Constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cachedData = useSelector((store) => store.search);
  const togglMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    //!important
    dispatch(cacheResults({ [searchQuery]: json[1] }));
    // console.log(json[1]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cachedData[searchQuery]) {
        setSuggestions(cachedData[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200); //debouncing

    return () => clearTimeout(timer); //clean up function
  }, [searchQuery]);

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
        <div>
          <input
            className="w-1/2 border border-gray-500 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border-gray-500 border p-2 rounded-r-full bg-gray-200">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white p-2 px-5 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔎{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img className="h-8" alt="user-icon" src={User_Icon} />
      </div>
    </div>
  );
};

export default Head;
