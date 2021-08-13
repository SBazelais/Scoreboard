import React from "react";
import { PlayersData } from "../PlayersData";
import { Player } from "./Player";

export const ListOfPlayers = () => {
  return (
    <>
      {PlayersData.map((player) => (
        <Player key={player.id} playerName={player.name} />
      ))}
    </>
  );
};
