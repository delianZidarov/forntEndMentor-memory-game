import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Token({
  icon,
  tokenId,
  onTokenClick,
  type,
  turnActions,
  matchedTokens,
  size,
}) {
  let tokenClass = "token ";
  let canBeClicked = true;
  if (size === "6") {
    tokenClass = tokenClass + "small ";
  }
  if ("" + tokenId === turnActions.firstGuess) {
    tokenClass = tokenClass + "active";
    canBeClicked = false;
  }
  if ("" + tokenId === turnActions.secondGuess) {
    tokenClass = tokenClass + "active";
    canBeClicked = false;
  }
  if (matchedTokens[`${tokenId}`] === 1) {
    tokenClass = tokenClass + "matched";
    canBeClicked = false;
  }

  return (
    <div
      className="game-token"
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
