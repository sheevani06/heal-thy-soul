import React from "react";

const PreviousBlogCard = (props) => {
  return (
    <div>
      <img
        style={{ widht: "332px", height: "222px" }}
        src={props.photo}
        alt="previousBlogs"
      />
      <h2 style={{ color: "var(--color-blue)", fontSize: "18px" }}>
        {props.text}
      </h2>
      <span
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <hr
          style={{
            color: "var(--color-red)",
            width: "200px",
            height: "2px",
            margin: "0",
          }}
        ></hr>
        <a
          style={{
            color: "var(--color-red)",
            marginLeft: "10px",
            textDecoration: "none",
          }}
          href="/more"
        >
          Read More
        </a>
      </span>
    </div>
  );
};

export default PreviousBlogCard;
