import React from "react";
import { useState } from "react";
import "./css/GameControls.css";
export default function GameControls({ saveBoardState, gameState }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function newGame() {
    saveBoardState({});
  }
  function restartGame() {
    const boardSettings = gameState.boardSettings;
    let players = {};
    for (let i = 1; i <= Object.keys(gameState.players).length; i++) {
      players[`player${i}`] = { score: 0, moves: 0 };
    }
    saveBoardState({ players, boardSettings });
    openCloseMenu();
  }
  function openCloseMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div>
      <button onClick={openCloseMenu}>Menu</button>
      {isMenuOpen && (
        <div className="game-controls-menu">
          <button onClick={restartGame}>Restart</button>
          <button onClick={newGame}>New Game</button>
          <button className="mobile-resume-game" onClick={openCloseMenu}>
            Resume Game
          </button>
        </div>
      )}
    </div>
  );
}
