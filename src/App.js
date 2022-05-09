import React from "react";
import { useState } from "react";
import SetupScreen from "./components/SetupScreen.js";
import Board from "./components/Board.js";
import "./App.css";

function App() {
  //STATE
  const defaultState = {
    players: { player1: { score: 0, moves: 0 } },
    boardSettings: { type: "icon", size: 4 },
  };

  const [gameState, setGameState] = useState(defaultState);
  //STATE CONTROL FUNCTIONS
  function setupGame(gameState) {
    setGameState(gameState);
  }
  console.log(gameState);
  return (
    <main className="App">
      {Object.keys(gameState).length === 0 && (
        <SetupScreen setupGame={setupGame} />
      )}
      {Object.keys(gameState).length > 0 && (
        <Board saveBoardState={setupGame} gameState={gameState} />
      )}
    </main>
  );
}

export default App;
