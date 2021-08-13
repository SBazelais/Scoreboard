import React from "react";
import "./styles.css";
import { Header } from "./components/Header";
import { Player } from "./components/Player";
import { PlayersData } from "./PlayersData";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header title="Scoreboard" totalPlayers={PlayersData.length} />
        {PlayersData.map((player) => (
          <Player key={player.id} playerName={player.name} />
        ))}
      </>
    );
  }
}
