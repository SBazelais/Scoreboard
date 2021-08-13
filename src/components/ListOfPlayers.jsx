import React from "react";
import { Player } from "./Player";

export const ListOfPlayers = ({ players, removePlayer }) => {
  return (
    <>
      {players.map((player) => (
        <Player
          key={player.id}
          id={player.id}
          playerName={player.name}
          removePlayer={removePlayer}
        />
      ))}
    </>
  );
};
