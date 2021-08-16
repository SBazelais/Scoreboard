import React from "react";
import { Player } from "./Player";

export const ListOfPlayers = ({ players, removePlayer, handleScoreChange }) => {
  return (
    <>
      {players.map((player, index) => (
        <Player
          key={player.id}
          id={player.id}
          playerScore={player.score}
          playerName={player.name}
          removePlayer={removePlayer}
          handleScoreChange={handleScoreChange}
          index={index}
        />
      ))}
    </>
  );
};
