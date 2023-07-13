import React from "react";
import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import ChangeColor from "./Components/ChangeColor";
import ChangeProfile from "./Components/ChangeProfile";


function App() {

  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor/>
      <ChangeProfile/>
    </div>
  );
}

export default App;
