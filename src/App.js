import React from "react";
import PlayersList from "./PlayersList";  // Corrected path
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
function App() {
  return (
    <div className="info">
      <h1>Football Players</h1>
      <>
      <PlayersList />
      </>
    </div>
  );
}

export default App;