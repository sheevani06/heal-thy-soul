import React from "react";
import WrapperCard from "./WrapperCard";
import firstBlog from "../../images/firstBlog.png";
import secondBlog from "../../images/secondBlog.png";
import PreviousBlogCard from "./PreviousBlogCard";
import thirdBlog from "../../images/thirdBlog.png";
import fourthBlog from "../../images/fourthBlog.png";
import fifthBlog from "../../images/fifthBlog.png";
import sixthBlog from "../../images/sixthBlog.png";
import seventhBlog from "../../images/seventhBlog.png";
import eighthBlog from "../../images/eighthBlog.png";
import ninthBlog from "../../images/ninthBlog.png";
import tenthBlog from "../../images/tenthBlog.png";
import eleventhBlog from "../../images/eleventhBlog.png";

const Blogs = () => {
  return (
    <div style={{ paddingLeft: "130px", paddingRight: "70px" }}>
      <h2 style={{ color: "var(--color-blue)" }}>Recent Blogs</h2>
      <div
        style={{
          marginTop: "0px",
          marginBottom: "50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <WrapperCard
            photo={firstBlog}
            title="Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
In elementum tincidunt pulvinar placerat at nisi, nulla id ."
          />
        </div>
        <div style={{ marginTop: "100px" }}>
          <WrapperCard
            photo={secondBlog}
            title="Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
In elementum tincidunt pulvinar placerat at nisi, nulla id ."
          />
        </div>
      </div>
      <div>
        <h2>Previous Blogs</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gridGap: "30px",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <PreviousBlogCard
            photo={thirdBlog}
            text="Lorem ipsum dolor sit amet."
          />
          <PreviousBlogCard
            photo={fourthBlog}
            text="Lorem ipsum dolor sit amet."
          />
          <PreviousBlogCard
            photo={fifthBlog}
            text="Lorem ipsum dolor sit amet."
          />
          <PreviousBlogCard
            photo={sixthBlog}
            text="Lorem ipsum dolor sit amet."
          />
          <PreviousBlogCard
            photo={seventhBlog}
            text="Lorem ipsum dolor sit amet."
          />
          <PreviousBlogCard
            photo={eighthBlog}
            text="Lorem ipsum dolor sit amet."
          />
          <PreviousBlogCard
            photo={ninthBlog}
            text="Lorem ipsum dolor sit amet."
          />
          <PreviousBlogCard
            photo={tenthBlog}
            text="Lorem ipsum dolor sit amet."
          />
          <PreviousBlogCard
            photo={eleventhBlog}
            text="Lorem ipsum dolor sit amet."
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
