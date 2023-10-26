import { useState } from "react";
import Heading from "./components/Heading";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div data-bs-theme="dark">
      <Heading />
    </div>
  );
}

export default App;
