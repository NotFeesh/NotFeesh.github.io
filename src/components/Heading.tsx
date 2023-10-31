const Heading = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md headspace">
      <div className="container-fluid">
        <a
          className="navbar-brand font-monospace fs-1 position-relative start-5"
          href="#"
        >
          <span className="text-purple font-monospace">{"< "}</span>
          KAIYO
          <span className="text-purple font-monospace">{" />"}</span>
        </a>
        <div className="position-relative end-5 font-monospace">
          <div className="content-desktop" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <span className="link-secondary">{"<"}</span>
                  {"About Me "}
                  <span className="link-secondary">{"/>"}</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <span className="link-secondary">{"<"}</span>
                  {"Projects "}
                  <span className="link-secondary">{"/>"}</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <span className="link-secondary">{"<"}</span>
                  {"Contact Me "}
                  <span className="link-secondary">{"/>"}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Heading;
