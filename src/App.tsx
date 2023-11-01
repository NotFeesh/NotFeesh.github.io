import { useState } from "react";
import Heading from "./components/Heading";
import SocialIcon from "./components/SocialIcon";

function App() {
  const githubIcon =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xOSAyNGgtMTRjLTIuNzYxIDAtNS0yLjIzOS01LTV2LTE0YzAtMi43NjEgMi4yMzktNSA1LTVoMTRjMi43NjIgMCA1IDIuMjM5IDUgNXYxNGMwIDIuNzYxLTIuMjM4IDUtNSA1em0uNjk5LTEyLjcxM2wtNi45ODYtNi45ODVjLS4yMDItLjIwMS0uNDY2LS4zMDItLjcyOS0uMzAyLS4yNjQgMC0uNTI3LjEwMS0uNzI5LjMwMmwtMS40NSAxLjQ1MSAxLjg0IDEuODRjLjQyOC0uMTQ0LjkxOC0uMDQ4IDEuMjU5LjI5My4zNDIuMzQzLjQzOS44MzcuMjkgMS4yNjdsMS43NzMgMS43NzNjLjQzLS4xNDguOTI1LS4wNTIgMS4yNjguMjkxLjQ3OC40NzkuNDc4IDEuMjU0IDAgMS43MzQtLjQ4LjQ3OS0xLjI1Ni40NzktMS43MzUgMC0uMzYtLjM2MS0uNDQ5LS44OS0uMjY3LTEuMzM0bC0xLjY1NC0xLjY1NHY0LjM1M2MuMTE3LjA1OC4yMjcuMTM1LjMyNS4yMzIuNDc4LjQ3OC40NzggMS4yNTQgMCAxLjczNC0uNDc5LjQ3OS0xLjI1Ni40NzktMS43MzQgMC0uNDc5LS40OC0uNDc5LTEuMjU2IDAtMS43MzQuMTE4LS4xMTkuMjU1LS4yMDguNDAxLS4yNjh2LTQuMzkzYy0uMTQ2LS4wNTktLjI4My0uMTQ4LS40MDEtLjI2Ny0uMzYzLS4zNjMtLjQ1MS0uODk1LS4yNjQtMS4zNDFsLTEuODE0LTEuODE0LTQuNzkgNC43OWMtLjIwMS4yMDItLjMwMi40NjUtLjMwMi43MjkgMCAuMjYzLjEwMS41MjcuMzAyLjcyOWw2Ljk4NiA2Ljk4NWMuMjAxLjIwMS40NjUuMzAxLjcyOC4zMDEuMjY0IDAgLjUyNy0uMS43MjktLjMwMWw2Ljk1NC02Ljk1MmMuMjAxLS4yMDIuMzAxLS40NjYuMzAxLS43MjkgMC0uMjY0LS4xLS41MjgtLjMwMS0uNzI5di0uMDAxeiIvPjwvc3ZnPg==";
  const instagramIcon =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTUuMjMzIDUuNDg4Yy0uODQzLS4wMzgtMS4wOTctLjA0Ni0zLjIzMy0uMDQ2cy0yLjM4OS4wMDgtMy4yMzIuMDQ2Yy0yLjE3LjA5OS0zLjE4MSAxLjEyNy0zLjI3OSAzLjI3OS0uMDM5Ljg0NC0uMDQ4IDEuMDk3LS4wNDggMy4yMzNzLjAwOSAyLjM4OS4wNDcgMy4yMzNjLjA5OSAyLjE0OCAxLjEwNiAzLjE4IDMuMjc5IDMuMjc5Ljg0My4wMzggMS4wOTcuMDQ3IDMuMjMzLjA0NyAyLjEzNyAwIDIuMzktLjAwOCAzLjIzMy0uMDQ2IDIuMTctLjA5OSAzLjE4LTEuMTI5IDMuMjc5LTMuMjc5LjAzOC0uODQ0LjA0Ni0xLjA5Ny4wNDYtMy4yMzNzLS4wMDgtMi4zODktLjA0Ni0zLjIzMmMtLjA5OS0yLjE1My0xLjExMS0zLjE4Mi0zLjI3OS0zLjI4MXptLTMuMjMzIDEwLjYyYy0yLjI2OSAwLTQuMTA4LTEuODM5LTQuMTA4LTQuMTA4IDAtMi4yNjkgMS44NC00LjEwOCA0LjEwOC00LjEwOHM0LjEwOCAxLjgzOSA0LjEwOCA0LjEwOGMwIDIuMjY5LTEuODM5IDQuMTA4LTQuMTA4IDQuMTA4em00LjI3MS03LjQxOGMtLjUzIDAtLjk2LS40My0uOTYtLjk2cy40My0uOTYuOTYtLjk2Ljk2LjQzLjk2Ljk2LS40My45Ni0uOTYuOTZ6bS0xLjYwNCAzLjMxYzAgMS40NzMtMS4xOTQgMi42NjctMi42NjcgMi42NjdzLTIuNjY3LTEuMTk0LTIuNjY3LTIuNjY3YzAtMS40NzMgMS4xOTQtMi42NjcgMi42NjctMi42NjdzMi42NjcgMS4xOTQgMi42NjcgMi42Njd6bTQuMzMzLTEyaC0xNGMtMi43NjEgMC01IDIuMjM5LTUgNXYxNGMwIDIuNzYxIDIuMjM5IDUgNSA1aDE0YzIuNzYyIDAgNS0yLjIzOSA1LTV2LTE0YzAtMi43NjEtMi4yMzgtNS01LTV6bS45NTIgMTUuMjk4Yy0uMTMyIDIuOTA5LTEuNzUxIDQuNTIxLTQuNjUzIDQuNjU0LS44NTQuMDM5LTEuMTI2LjA0OC0zLjI5OS4wNDhzLTIuNDQ0LS4wMDktMy4yOTgtLjA0OGMtMi45MDgtLjEzMy00LjUyLTEuNzQ4LTQuNjU0LTQuNjU0LS4wMzktLjg1My0uMDQ4LTEuMTI1LS4wNDgtMy4yOTggMC0yLjE3Mi4wMDktMi40NDUuMDQ4LTMuMjk4LjEzNC0yLjkwOCAxLjc0OC00LjUyMSA0LjY1NC00LjY1My44NTQtLjA0IDEuMTI1LS4wNDkgMy4yOTgtLjA0OXMyLjQ0NS4wMDkgMy4yOTkuMDQ4YzIuOTA4LjEzMyA0LjUyMyAxLjc1MSA0LjY1MyA0LjY1My4wMzkuODU0LjA0OCAxLjEyNy4wNDggMy4yOTkgMCAyLjE3My0uMDA5IDIuNDQ1LS4wNDggMy4yOTh6Ii8+PC9zdmc+";
  const linkedinIcon =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMTEgMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTYtMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5eiIvPjwvc3ZnPg==";

  return (
    <>
      <Heading></Heading>
      <div className="container-fluid">
        <div className="row ms-5 me-5">
          <div className="col-2 border border-primary position-sticky content-desktop">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <SocialIcon
                  source={githubIcon}
                  goto="https://github.com/NotFeesh"
                  label="GitHub"
                />
              </li>
              <li className="list-group-item">
                <SocialIcon
                  source={instagramIcon}
                  goto="https://www.instagram.com/kaiyo.jy/"
                  label="Instagram"
                />
              </li>
              <li className="list-group-item">
                <SocialIcon
                  source={linkedinIcon}
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
                    source={githubIcon}
                    goto="https://github.com/NotFeesh"
                    hasLabel={false}
                  />
                </li>
                <li className="list-group-item border-0">
                  <SocialIcon
                    source={instagramIcon}
                    goto="https://www.instagram.com/kaiyo.jy/"
                    hasLabel={false}
                  />
                </li>
                <li className="list-group-item border-0">
                  <SocialIcon
                    source={linkedinIcon}
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
