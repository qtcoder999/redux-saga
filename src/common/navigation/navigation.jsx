import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div>
    <ul className="style-none flex list">
      {/* <li>
        <Link to="/">Home</Link>
      </li> */}
      <li>
        <Link to="/git">Git Reader</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/cra">CRA latest releases</Link>
      </li>
      <li>
        <Link to="/timer">Virtual Dom Timer</Link>
      </li>
      <li>
        <Link to="/movie">Movie Search</Link>
      </li>
      <li>
        <Link to="/weather">Weather Search</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
