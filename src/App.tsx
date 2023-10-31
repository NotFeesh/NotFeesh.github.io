import { useState } from "react";
import Heading from "./components/Heading";
import SocialIcon from "./components/SocialIcon";

function App() {
  const githubIcon =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xOSAyNGgtMTRjLTIuNzYxIDAtNS0yLjIzOS01LTV2LTE0YzAtMi43NjEgMi4yMzktNSA1LTVoMTRjMi43NjIgMCA1IDIuMjM5IDUgNXYxNGMwIDIuNzYxLTIuMjM4IDUtNSA1em0uNjk5LTEyLjcxM2wtNi45ODYtNi45ODVjLS4yMDItLjIwMS0uNDY2LS4zMDItLjcyOS0uMzAyLS4yNjQgMC0uNTI3LjEwMS0uNzI5LjMwMmwtMS40NSAxLjQ1MSAxLjg0IDEuODRjLjQyOC0uMTQ0LjkxOC0uMDQ4IDEuMjU5LjI5My4zNDIuMzQzLjQzOS44MzcuMjkgMS4yNjdsMS43NzMgMS43NzNjLjQzLS4xNDguOTI1LS4wNTIgMS4yNjguMjkxLjQ3OC40NzkuNDc4IDEuMjU0IDAgMS43MzQtLjQ4LjQ3OS0xLjI1Ni40NzktMS43MzUgMC0uMzYtLjM2MS0uNDQ5LS44OS0uMjY3LTEuMzM0bC0xLjY1NC0xLjY1NHY0LjM1M2MuMTE3LjA1OC4yMjcuMTM1LjMyNS4yMzIuNDc4LjQ3OC40NzggMS4yNTQgMCAxLjczNC0uNDc5LjQ3OS0xLjI1Ni40NzktMS43MzQgMC0uNDc5LS40OC0uNDc5LTEuMjU2IDAtMS43MzQuMTE4LS4xMTkuMjU1LS4yMDguNDAxLS4yNjh2LTQuMzkzYy0uMTQ2LS4wNTktLjI4My0uMTQ4LS40MDEtLjI2Ny0uMzYzLS4zNjMtLjQ1MS0uODk1LS4yNjQtMS4zNDFsLTEuODE0LTEuODE0LTQuNzkgNC43OWMtLjIwMS4yMDItLjMwMi40NjUtLjMwMi43MjkgMCAuMjYzLjEwMS41MjcuMzAyLjcyOWw2Ljk4NiA2Ljk4NWMuMjAxLjIwMS40NjUuMzAxLjcyOC4zMDEuMjY0IDAgLjUyNy0uMS43MjktLjMwMWw2Ljk1NC02Ljk1MmMuMjAxLS4yMDIuMzAxLS40NjYuMzAxLS43MjkgMC0uMjY0LS4xLS41MjgtLjMwMS0uNzI5di0uMDAxeiIvPjwvc3ZnPg==";

  return (
    <div className="container" data-bs-theme="dark">
      <div className="row">
        <Heading />
      </div>
      <div className="row">
        <SocialIcon source={githubIcon} goto=""></SocialIcon>
      </div>
    </div>
  );
}

export default App;