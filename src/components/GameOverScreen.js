import React from "react";
import GameControls from "./GameControls";
import "./css/GameOverScreen.css";
function GameOverScreen({
  saveBoardState,
  gameState,
  resetBoardActionInformation,
}) {
  let elapsedTime = "1:53";
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
  }
  console.log("game over screen state", gameState);
  return (
    <div className="game-over-display">
      <div className="game-over-title">
        {Object.keys(gameState.players).length === 1 && (
          <>
            <h2>You did it!</h2>
            <p>Game Over! Here's how you got on...</p>
          </>
        )}
      </div>
      <div className="game-over-information">
        {Object.keys(gameState.players).length === 1 && (
          <>
            <div>
              <h3>Time Elapsed</h3> <p>{elapsedTime}</p>
            </div>
            <div>
              <h3>Moves Taken</h3>{" "}
              <p>{gameState.players["player1"].moves} Moves</p>
            </div>
          </>
        )}
      </div>
      <div className="game-over-buttons">
        <button onClick={restartGame}>Restart</button>
        <button onClick={newGame}>Setup New Game</button>
      </div>
    </div>
  );
}

export default GameOverScreen;
