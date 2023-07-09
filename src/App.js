import React from "react";
import "./App.css";
import { useToggle } from "./Components/useToggle";
import Person from "./Components/Person";


function App() {
  const [isVisible, toggle] = useToggle();

  return (
    <div className="App">
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      <p> {isVisible && "Hidden Text"} </p>

      <Person
        name="Grace"
        email="grace@email.com"
        age={22}
        isMarried={false}
        friends={["MINTY", "MANTY", "MONTY"]}
      />
    </div>
  );
}

export default App;
