import React from "react";

const WrapperCard = (props) => {
  return (
    <div>
      <img
        src={props.photo}
        alt="blog"
        style={{ width: "597px", height: "400px" }}
      />
      <h2 style={{ color: "var(--color-blue)" }}>{props.title}</h2>
      <p
        style={{
          color: "var(--color-blue)",
          width: "500px",
          fontSize: "17px",
          opacity: "0.8",
        }}
      >
        {props.description}
      </p>

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
            width: "400px",
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

export default WrapperCard;
