import React from "react";
import CommentWrap from "./CommentWrap";
const Comments = () => {
  return (
    <div style={{ background: "#c4c4c4", padding: "20px 200px" }}>
      <h1 style={{ fontWeight: "bolder", fontStyle: "normal" }}>Comments</h1>
      <div style={{ marginTop: "50px" }}>
        <CommentWrap />
        <CommentWrap />
      </div>
    </div>
  );
};

export default Comments;
