import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/Token.css";
function Token({
  icon,
  tokenId,
  onTokenClick,
  type,
  turnActions,
  matchedTokens,
  size,
}) {
  const [canBeClicked, setCanBeClicked] = useState(true);
  const [tokenClass, setTokenClass] = useState(
    `game-token ${size === "6" ? "small" : ""}`
  );

  useEffect(() => {
    if (
      "" + tokenId !== turnActions.firstGuess &&
      "" + tokenId !== turnActions.firstGuess &&
      matchedTokens[`${tokenId}`] !== 1
    ) {
      setTokenClass(`game-token ${size === "6" ? "small" : ""}`);
      setCanBeClicked(true);
    }
  }, [turnActions]);

  useEffect(() => {
    if ("" + tokenId === turnActions.firstGuess) {
      setTokenClass(tokenClass + " active");
      setCanBeClicked(false);
    }
  }, [turnActions]);

  useEffect(() => {
    if ("" + tokenId === turnActions.secondGuess) {
      setTokenClass(tokenClass + " active");
      setCanBeClicked(false);
    }
  }, [turnActions]);

  useEffect(() => {
    if (matchedTokens[`${tokenId}`] === 1) {
      setTimeout(() => {
        setTokenClass("game-token matched");
        setCanBeClicked(false);
      }, 500);
    }
  }, [turnActions]);
  return (
    <div
      id={tokenId}
      className={tokenClass}
      onClick={canBeClicked ? onTokenClick : undefined}
    >
      {type === "icons" && <FontAwesomeIcon icon={icon} />}
      {type === "numbers" && <div>{icon}</div>}
    </div>
  );
}

export default Token;
