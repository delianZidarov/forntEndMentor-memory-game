import React from "react";
import { useEffect } from "react";
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
function GameTokens({
  gameState,
  saveBoardState,
  onTokenClick,
  turnActions,
  matchedTokens,
}) {
  const { size, type } = gameState.boardSettings;

  const gameBoardState =
    gameState.currentBoard.length > 0
      ? gameState.currentBoard
      : generateGameBoard(getTokenCollection(type, size));

  function renderGameBoard(tokensArray) {
    // saveBoardState({
    //   ...gameState,
    //   currentBoard: gameBoardState,
    // });
    //   const gameBoard = gameBoardState.map((element, i) => {
    //     <td key={i}>
    //       <Token icon={element} tokenId={i} onTokenClick/>
    //     </td>;
    //   });
    console.log(
      "RENDER",
      tokensArray.map((element, i) => {
        <td key={i}>
          <Token icon={element} tokenId={i} onTokenClick={onTokenClick} />
        </td>;
      })
    );
    return tokensArray.map((element, i) => {
      <td key={i}>
        <Token icon={element} tokenId={i} onTokenClick={onTokenClick} />
      </td>;
    });
  }
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
    if (size === "6") {
      return type === "icons" ? potentialIconTokens : [...Array(18).keys()];
    }
    if (size === "4") {
      let selectedList = {};
      let uniqueIndexes = pickUnique(8, 18, selectedList);
      let iconSelection = uniqueIndexes.map(
        (index) => potentialIconTokens[index]
      );
      return type === "icons" ? iconSelection : [...Array(8).keys()];
    }
  }
  function pickUnique(size, range, dictionary) {
    let randomNumbers = [];
    while (randomNumbers.length < size) {
      let randomNumber = Math.floor(Math.random() * range);
      if (dictionary[randomNumber] == undefined) {
        randomNumbers.push(randomNumber);
        dictionary[randomNumber] = 1;
      }
    }
    return randomNumbers;
  }
  function generateGameBoard(tokens) {
    const doubledTokens = [...tokens, ...tokens];
    let dictionaryForIndexes = {};
    const indexesToMapTo = pickUnique(
      doubledTokens.length,
      doubledTokens.length,
      dictionaryForIndexes
    );
    return indexesToMapTo.map((index) => doubledTokens[index]);
  }
  useEffect(() => {
    saveBoardState({ ...gameState, currentBoard: gameBoardState });
  }, [gameBoardState]);
  console.log(
    gameBoardState.map((icon, i) => (
      <Token icon={icon} tokenId={i} onTokenClick={onTokenClick} />
    ))
  );
  return (
    <div>
      {/* <Token icon={gameBoardState[0]} tokenId={0} onTokenClick={onTokenClick} /> */}
      {gameBoardState.map((icon, i) => (
        <Token
          icon={icon}
          tokenId={i}
          onTokenClick={onTokenClick}
          type={type}
          turnActions={turnActions}
          matchedTokens={matchedTokens}
          size={size}
        />
      ))}
    </div>
  );
}

export default GameTokens;
