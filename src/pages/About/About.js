import React from "react";
import Image from "../../images/About.png";
import AboutFlower from "../../images/AboutFlower.png";
import HoverCard from "./HoverCard";
import firstImage from "../../images/firstImage.png";
import secondImage from "../../images/secondImage.png";
import thirdImage from "../../images/thirdImage.png";
import fourthImage from "../../images/fourthImage.png";
import fifthImage from "../../images/fifthImage.png";
import team from "../../images/team.png";

const About = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div
        style={{
          minHeight: "200px",
          paddingTop: "0",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            paddingLeft: "400px",
            width: "1042px",
          }}
        >
          <h1
            style={{
              marginTop: "0",
              fontSize: "50px",
              fontStyle: "normal",
              fontWeight: "bolder",
              lineHeight: "78px",
              letterSpacing: "0em",
              textAlign: "left",
              textTransform: "uppercase",
              color: "var(--color-blue)",
            }}
          >
            ABOUT
          </h1>
          <img
            src={Image}
            style={{ width: "650px", height: "350px" }}
            alt="about"
          ></img>
          <p
            style={{
              marginTop: "130px",
              fontSize: "18px",
              color: "var(--color-blue)",
              width: "550px",
              letterSpacing: "1px",
              fontWeight: "lighter",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant
            mattis senectus sapien ipsum eu sodales. Auctor dui nunc sit nullam
            felis, sit felis. Morbi leo pellentesque ac, maecenas aenean in
            suspendisse tellus. Volutpat risus mauris tempor mi at etiam sed.
            Ac, egestas ullamcorper malesuada quam amet placerat. Aliquet leo
            sed scelerisque vitae, sit nec senectus accumsan. Quisque varius
            posuere libero nibh amet duis mi feugiat. At interdum purus odio id
            nisl, orci.
          </p>
        </div>
        <div>
          <img
            style={{
              transform: "scale(90%)",
              position: "relative",
              top: "200px",
              padding: "0",
              right: "-30px",
            }}
            src={AboutFlower}
            alt="flower"
          ></img>
        </div>
      </div>
      <div
        style={{
          width: "1000px",
          paddingTop: "50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginRight: "0",
            marginLeft: "350px",
          }}
        >
          <h2 style={{ color: "var(--color-blue)", width: "500px" }}>
            Nulla vestibulum vitae velit vitae ut pellentesque maecenas
            pellentesque. Pharetra nunc integer consequat velit placerat
            convallis. Facilisis aliquam iaculis tell.
          </h2>
          <p
            style={{
              paddingLeft: "100px",
              paddingTop: "80px",
              fontSize: "18px",
              color: "var(--color-blue)",
              width: "630px",
            }}
          >
            Nulla vestibulum vitae velit vitae ut pellentesque maecenas
            pellentesque. Pharetra nunc integer consequat velit placerat
            convallis. Facilisis aliquam iaculis tellus eu, volutpat in eget
            nullam. Aliquet volutpat aliquet et nisl iaculis risus semper sed.
            Nec nunc cras maecenas lobortis quis turpis sed at. Turpis
            ullamcorper enim, tincidunt magna sed.
          </p>
        </div>
        <div>
          <h1
            style={{
              color: "var(--color-blue)",
              fontSize: "50px",
              fontStyle: "normal",
              fontWeight: "bolder",
              lineHeight: "78px",
              letterSpacing: "0em",
              transform: "rotate(90deg)",
              width: "400px",
              paddingLeft: "60px",
              paddingBottom: "150px",
            }}
          >
            OUR VISION
          </h1>
        </div>
      </div>
      <div
        style={{
          marginTop: "50px",
          marginBottom: "50px",
          width: "100%",
          paddingLeft: "350px",
          display: "grid",
          gridColumnGap: "0px",
          gridTemplateColumns: "auto auto auto",
          gridRowGap: "50px",
        }}
      >
        <div style={{ margin: "0", height: "200px" }}>
          <h1
            style={{
              margin: "0",
              width: "250px",
              height: "200px",
              color: "var(--color-blue)",
              fontSize: "50px",
              fontStyle: "normal",
              fontWeight: "bolder",
              letterSpacing: "0em",
            }}
          >
            OUR MEDICAL SUPPORT
          </h1>
        </div>
        <div style={{ width: "300px" }}>
          <HoverCard
            photo={firstImage}
            text="Dr. Blah fsaincfka"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu diam vitae id. "
          />
        </div>
        <div>
          <HoverCard
            style={{
              width: "310px",
              height: "390px",
            }}
            photo={secondImage}
            text="Dr. Blah fsaincfka"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu diam vitae id. "
          />
        </div>
        <div>
          <HoverCard
            photo={thirdImage}
            text="Dr. Blah fsaincfka"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu diam vitae id. "
          />
        </div>
        <div>
          <HoverCard
            photo={fourthImage}
            text="Dr. Blah fsaincfka"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu diam vitae id. "
          />
        </div>
        <div>
          <HoverCard
            photo={fifthImage}
            text="Dr. Blah fsaincfka"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu diam vitae id. "
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            color: "var(--color-blue)",
            fontSize: "50px",
            fontStyle: "normal",
            fontWeight: "bolder",
          }}
        >
          OUR TEAM
        </h1>
        <img
          src={team}
          alt="ourTeam"
          style={{ width: "1010px", height: "465px" }}
        ></img>
        <h2
          style={{
            color: "var(--color-blue)",
            width: "700px",
            textAlign: "center",
            height: "100px",
            marginTop: "50px",
          }}
        >
          Nulla vestibulum vitae velit vitae ut pellentesque<br></br> maecenas
          pellentesque. Pharetra nunc integer<br></br> consequat velit
        </h2>
      </div>
    </div>
  );
};
export default About;
