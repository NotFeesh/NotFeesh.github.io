import { useState } from "react";
import Heading from "./components/Heading";
import SocialIcon from "./components/SocialIcon";
import * as constants from "./constants";

function App() {
  return (
    <>
      <Heading></Heading>
      <div className="container-fluid">
        <div className="row ms-5 me-5">
          <div className="col-2 border border-primary position-sticky content-desktop">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <SocialIcon
                  source={constants.githubIcon}
                  goto="https://github.com/NotFeesh"
                  label="GitHub"
                />
              </li>
              <li className="list-group-item">
                <SocialIcon
                  source={constants.instagramIcon}
                  goto="https://www.instagram.com/kaiyo.jy/"
                  label="Instagram"
                />
              </li>
              <li className="list-group-item">
                <SocialIcon
                  source={constants.linkedinIcon}
                  goto="https://www.linkedin.com/in/kaiyo-igaki/"
                  label="LinkedIn"
                />
              </li>
            </ul>
          </div>
          <div className="col border border-secondary">
            <div className="content-mobile">
              <ul className="list-group">
                <li className="list-group-item border-0">
                  <SocialIcon
                    source={constants.githubIcon}
                    goto="https://github.com/NotFeesh"
                    hasLabel={false}
                  />
                </li>
                <li className="list-group-item border-0">
                  <SocialIcon
                    source={constants.instagramIcon}
                    goto="https://www.instagram.com/kaiyo.jy/"
                    hasLabel={false}
                  />
                </li>
                <li className="list-group-item border-0">
                  <SocialIcon
                    source={constants.linkedinIcon}
                    goto="https://www.linkedin.com/in/kaiyo-igaki/"
                    hasLabel={false}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
