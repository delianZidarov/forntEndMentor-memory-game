import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Token({ icon, tokenId, onTokenClick }) {
  return (
    <div className="game-token" id={tokenId} onClick={onTokenClick}>
      <FontAwesomeIcon icon={icon} id={tokenId} />
    </div>
  );
}

export default Token;
