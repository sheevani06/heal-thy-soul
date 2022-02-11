import React, { useState } from "react";

const HoverCard = (props) => {
  const [hover, setHover] = useState(true);
  const openHover = () => {
    setHover(false);
  };
  const leaveHover = () => {
    setHover(true);
  };
  return (
    <div>
      {hover ? (
        <img src={props.photo} alt="staff" onMouseOver={openHover} />
      ) : (
        <div
          style={{
            width: "300px",
            height: "400px",
            backgroundColor: "gray",
            padding: "30px",
          }}
          onMouseLeave={leaveHover}
        >
          <h2>{props.text}</h2>
          <p>{props.description}</p>
        </div>
      )}
    </div>
  );
};

export default HoverCard;
