import { useState } from "react";
import Heading from "./components/Heading";
import SocialIconList from "./components/SocialIconList";
import TypedText from "./components/TypeText";
import TypeText from "./components/TypeText";

function App() {
  return (
    <>
      <Heading></Heading>
      <div className="container-fluid">
        <div className="row ms-5 me-5">
          <SocialIconList></SocialIconList>
          <div className="col">
            <div id="aboutme">
              <p className="fs-1">Hey there! I'm Kaiyo.</p>
              <p className="fs-3">
                A high school junior and aspiring developer. <br /> I love{" "}
                <span className="text-danger">
                  <TypeText
                    strings={["challenges", "learning", "growing", "VALORANT"]}
                  ></TypeText>
                </span>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                hee hee
              </p>
            </div>
            <div id="projects">
              <p className="fs-1">Projects</p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <div id="contactme">
              <p className="fs-1">Contact Me</p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
