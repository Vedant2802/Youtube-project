import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // Early return pattern
  // if (!isMenuOpen) return null;
  return (
    isMenuOpen && (
      <div className="p-5 w-48 shadow-lg">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <h1 className="font-bold">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sport</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <h1 className="font-bold py-5">Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sport</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    )
  );
};

export default Sidebar;
