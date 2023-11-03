import SocialIcon from "../components/SocialIcon";
import * as constants from "../constants";

const SocialIconList = () => {
  return (
    <>
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
      <div className="col-2 content-desktop">
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
    </>
  );
};

export default SocialIconList;
