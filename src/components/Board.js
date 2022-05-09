import React from "react";
import { useState } from "react";
import Logo from "./Logo.js";
import GameControls from "./GameControls.js";
import "./css/Board.css";
function Board({ saveBoardState, gameState }) {
  return (
    <div className="game-board-container">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="game-controls-container">
        <GameControls saveBoardState={saveBoardState} gameState={gameState} />
      </div>
    </div>
  );
}

export default Board;
