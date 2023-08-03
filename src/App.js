import React from "react";
import "./App.css";
// import TheUseReducerHook from "./HooksLearning/theUseEffectHook";
import TheUseEffectHook from "./HooksLearning/theUseEffectHook";
// import Login from "./Components/Login";
// import Profile from "./Components/Profile";
// import ChangeColor from "./Components/ChangeColor";
// import ChangeProfile from "./Components/ChangeProfile";
//import GameBoard from "./Components/GameBoard";


function App() {
  return (
    <div className="App">
      {/* <Profile />
      <Login />
      <ChangeColor/>
      <ChangeProfile/> */}
      {/* <GameBoard/> */}
      <TheUseEffectHook />
    </div>
  );
}

export default App;
