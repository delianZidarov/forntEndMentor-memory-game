import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faAnchor,
  faBiohazard,
  faBowlRice,
  faBridgeWater,
  faBug,
  faBurger,
  faChessQueen,
  faCartShopping,
  faCookieBite,
  faCouch,
  faCrow,
  faGift,
  faGhost,
  faHippo,
  faHeart,
  faMask,
  faOtter,
} from "@fortawesome/free-solid-svg-icons";
import "./css/GameTokens.css";
import Token from "./Token.js";
function GameTokens({ boardSettings }) {
  const { size, type } = boardSettings;
  //   function renderTokens(size, type) {
  //     const tokens = getTokenCollection(type, size);
  //     const gameBoardState = generateGameBoard(tokens, size);
  //     const gameBoard = gameBoardState.map((element, i) => {
  //       <td key={i}>
  //         <Token />
  //       </td>;
  //     });
  //   }
  function getTokenCollection(type, size) {
    const potentialIconTokens = [
      faAward,
      faAnchor,
      faBiohazard,
      faBowlRice,
      faBridgeWater,
      faBug,
      faBurger,
      faChessQueen,
      faCartShopping,
      faCookieBite,
      faCouch,
      faCrow,
      faGift,
      faGhost,
      faHippo,
      faHeart,
      faMask,
      faOtter,
    ];
    console.log("tokens", potentialIconTokens);
    if (size === "6") {
      return type === "icons" ? potentialIconTokens : [...Array(18).keys()];
    }
    if (size === "4") {
      let selectedList = {};
      let iconSelection = Array(8);
      iconSelection.forEach((slot) => {});
      return type === "icons" ? iconSelection : [...Array(8).keys()];
    }
  }

  function generateGameBoard(tokens, size) {}
  console.log(getTokenCollection(type, size));
  return (
    <div>
      {/* <table>{renderTokens(size, type)}</table> */}
      <FontAwesomeIcon icon={faBowlRice} />
    </div>
  );
}

export default GameTokens;
