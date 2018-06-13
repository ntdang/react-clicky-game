import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="nav-item active">
        <a href="/react-clicky-game/">{props.title}</a>
      </li>

      <li id="msg">{props.message}</li>

      <li id="current">Current Score: {props.score}</li>

      <li id="top">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;