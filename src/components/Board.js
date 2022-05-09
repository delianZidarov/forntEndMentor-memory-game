import React from "react";
import { useState } from "react";
import Logo from "./Logo.js";
import GameControls from "./GameControls.js";
import GameTokens from "./GameTokens.js";
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
      <div className="game-tokens-display">
        <GameTokens boardSettings={gameState.boardSettings} />
      </div>
    </div>
  );
}

export default Board;
