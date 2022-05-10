import React from "react";
import { useState, useEffect } from "react";
import Logo from "./Logo.js";
import GameControls from "./GameControls.js";
import GameTokens from "./GameTokens.js";
import "./css/Board.css";
function Board({ saveBoardState, gameState }) {
  const { players, boardSettings, currentBoard } = gameState;
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [turnActions, setTurnActions] = useState({
    firstGuess: false,
    secondGuess: false,
  });
  const [gameMovesLeft, setGameMovesLeft] = useState(
    gameState.boardSettings.size ** 2 / 2
  );
  const [matchedTokens, setMatchedTokens] = useState({});
  const [isGameInProgress, setIsGameInPorgress] = useState(false);
  //STATE CONTROL FUNCTIONS
  function setNextPlayer(currentPlayer, maxSize) {
    let nextPlayer;
    if (currentPlayer + 1 <= maxSize) {
      nextPlayer = currentPlayer + 1;
    } else {
      nextPlayer = 1;
    }
    setCurrentPlayer(nextPlayer);
  }
  function onTokenClick(event) {
    if (isGameInProgress === false) {
      changeIsGameInProgress();
    }
    if (turnActions.firstGuess === false) {
      setTurnActions({ ...turnActions, firstGuess: event.currentTarget.id });
    }
    let secondGuess;
    if (turnActions.firstGuess && turnActions.secondGuess === false) {
      setTurnActions({ ...turnActions, secondGuess: event.currentTarget.id });
      secondGuess = event.currentTarget.id;
    }
    if (turnActions.firstGuess && secondGuess) {
      const firstIndex = parseInt(turnActions.firstGuess);
      const secondIndex = parseInt(secondGuess);
      if (
        JSON.stringify(currentBoard[firstIndex]) ===
        JSON.stringify(currentBoard[secondIndex])
      ) {
        let updatedPlayers = { ...players };
        updatedPlayers[`player${currentPlayer}`].score += 1;
        saveBoardState({
          currentBoard,
          boardSettings,
          players: updatedPlayers,
        });
        setGameMovesLeft(gameMovesLeft - 1);
        setMatchedTokens({
          ...matchedTokens,
          [turnActions.firstGuess]: 1,
          [secondGuess]: 1,
        });
      }
      let updatedPlayersMoves = { ...players };
      updatedPlayersMoves[`player${currentPlayer}`].moves += 1;
      saveBoardState({
        currentBoard,
        boardSettings,
        players: updatedPlayersMoves,
      });
      setTimeout(() => {
        setTurnActions({
          firstGuess: false,
          secondGuess: false,
        });
      }, 500);

      setNextPlayer(currentPlayer, Object.keys(players).length);
    }
  }
  function changeIsGameInProgress() {
    setIsGameInPorgress(!isGameInProgress);
  }

  return (
    <div className="game-board-container">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="game-controls-container">
        <GameControls saveBoardState={saveBoardState} gameState={gameState} />
      </div>
      <div className="game-tokens-display">
        <GameTokens
          gameState={gameState}
          saveBoardState={saveBoardState}
          onTokenClick={onTokenClick}
          turnActions={turnActions}
          matchedTokens={matchedTokens}
        />
      </div>
    </div>
  );
}

export default Board;
