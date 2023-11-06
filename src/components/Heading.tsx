import { Link, animateScroll as scroll } from "react-scroll";

const offset = -70;
const duration = 0;

const Heading = () => {
  return (
    <nav className="navbar navbar-expand-md headspace sticky-top">
      <div className="container-fluid">
        <Link
          activeClass="active"
          to="aboutme"
          spy={true}
          smooth={true}
          offset={offset}
          duration={duration}
          className="navbar-brand font-monospace fs-1 position-relative start-3"
        >
          <span className="text-purple font-monospace">{"< "}</span>
          KAIYO
          <span className="text-purple font-monospace">{" />"}</span>
        </Link>
        <div className="position-relative end-5 font-monospace">
          <div className="content-desktop" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="aboutme"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={duration}
                  className="nav-link active"
                  aria-current="page"
                >
                  <span className="link-secondary">{"<"}</span>
                  {"About Me "}
                  <span className="link-secondary">{"/>"}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={duration}
                  className="nav-link active"
                >
                  <span className="link-secondary">{"<"}</span>
                  {"Projects "}
                  <span className="link-secondary">{"/>"}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="contactme"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={duration}
                  className="nav-link active"
                  href="#contactme"
                >
                  <span className="link-secondary">{"<"}</span>
                  {"Contact Me "}
                  <span className="link-secondary">{"/>"}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Heading;
