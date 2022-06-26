import React from "react";
import "./Header.scss";
import netflix from "../../netflix.png";
import { NavLink } from "react-router-dom";
import { ImSearch } from "react-icons/im";

const Header = () => {
  return (
    <nav className="header">
      <img src={netflix} alt="netflix" />

      <div>
        <NavLink to="/tvshows">TV Shows</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/recentlyadded">Recently Added</NavLink>
        <NavLink to="/mylist">My List</NavLink>
      </div>

      <ImSearch />
    </nav>
  );
};

export default Header;
