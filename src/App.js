import React from "react";
import { useState } from "react";
import SetupScreen from "./components/SetupScreen.js";
import "./App.css";

function App() {
  //STATE
  const defaultState = {
    players: { player1: { score: 0, moves: 0 } },
    boardSettings: { type: "icon", size: 4 },
  };

  const [gameState, setGameState] = useState({});
  //STATE CONTROL FUNCTIONS
  function setupGame(gameState) {
    setGameState(gameState);
  }
  return (
    <main className="App">
      {Object.keys(gameState).length === 0 && (
        <SetupScreen setupGame={setupGame} />
      )}
    </main>
  );
}

export default App;
