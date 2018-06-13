import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card" onClick={props.handleClick}>
    <div className="img-container">
      <img alt={props.image.replace(".png", "")} src={require("../images/" + props.image)} />
    </div>
  </div>
);

export default FriendCard;