import React from "react";
import { useState, useEffect } from "react";
import "./css/GameControls.css";
export default function GameControls({
  saveBoardState,
  gameState,
  resetBoardActionInformation,
}) {
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
    saveBoardState({ players, boardSettings, currentBoard: [] });
    resetBoardActionInformation();
    openCloseMenu();
  }

  function openCloseMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if (window.innerWidth >= 412) {
      setIsMenuOpen(true);
    }
  }, []);
  return (
    <div className="game-controls">
      <button onClick={openCloseMenu}>Menu</button>
      {isMenuOpen && (
        <div className="game-controls-menu-bg">
          <div className="game-controls-menu">
            <button onClick={restartGame}>Restart</button>
            <button onClick={newGame}>New Game</button>
            <button className="mobile-resume-game" onClick={openCloseMenu}>
              Resume Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
