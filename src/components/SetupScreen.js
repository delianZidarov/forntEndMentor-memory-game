import React from "react";
import { useState } from "react";
import Logo from "./Logo.js";
import "./css/SetupScreen.css";
function SetupScreen({ setupGame }) {
  //STATES
  const defaultFormState = {
    "game-theme": "numbers",
    "player-count": "1",
    "game-size": "4",
  };
  const [formData, setFormData] = useState(defaultFormState);
  //HANDLE FORM ACTIONS
  function handleRadioSelection(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let players = {};
    for (let i = 1; i <= parseInt(formData["player-count"]); i++) {
      players[`player${i}`] = { score: 0, moves: 0 };
    }
    const boardSettings = {
      type: formData["game-theme"],
      size: formData["game-size"],
    };
    console.log({ players, boardSettings });
    setupGame({ players, boardSettings });
  }
  return (
    <section className="setup-screen-container">
      <div className="logo-container-setup">
        <Logo />
      </div>
      <form>
        <h2>Select Theme</h2>
        <div>
          <input
            type="radio"
            id="numbers-theme"
            name="game-theme"
            value="numbers"
            onChange={handleRadioSelection}
            defaultChecked
          ></input>
          <label htmlFor="numbers-theme">Numbers</label>
          <input
            type="radio"
            id="icons-theme"
            name="game-theme"
            value="icons"
            onChange={handleRadioSelection}
          ></input>
          <label htmlFor="icons-theme">Icons</label>
        </div>
        <h2>Numbers of Players</h2>
        <div>
          <input
            type="radio"
            id="one-player"
            name="player-count"
            value="1"
            onChange={handleRadioSelection}
            defaultChecked
          ></input>
          <label htmlFor="one-player">1</label>
          <input
            type="radio"
            id="two-player"
            name="player-count"
            value="2"
            onChange={handleRadioSelection}
          ></input>
          <label htmlFor="two-player">2</label>
          <input
            type="radio"
            id="three-player"
            name="player-count"
            value="3"
            onChange={handleRadioSelection}
          ></input>
          <label htmlFor="three-player">3</label>
          <input
            type="radio"
            id="four-player"
            name="player-count"
            value="4"
            onChange={handleRadioSelection}
          ></input>
          <label htmlFor="four-player">4</label>
        </div>
        <h2>Grid Size</h2>
        <div>
          <input
            type="radio"
            id="four-by-four"
            name="game-size"
            value="4"
            onChange={handleRadioSelection}
            defaultChecked
          ></input>
          <label htmlFor="four-by-four">4x4</label>
          <input
            type="radio"
            id="six-by-six"
            name="game-size"
            value="6"
            onChange={handleRadioSelection}
          ></input>
          <label htmlFor="six-by-six">6x6</label>
        </div>
        <button onClick={handleSubmit}>Start Game</button>
      </form>
    </section>
  );
}

export default SetupScreen;
