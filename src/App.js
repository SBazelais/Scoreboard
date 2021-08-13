import React from "react";
import "./styles.css";
import { Header } from "./components/Header";
import { PlayersData } from "./PlayersData";
import { ListOfPlayers } from "./components/ListOfPlayers";

export default class App extends React.Component {
  state = {
    players: PlayersData
  };

  render() {
    return (
      <>
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />
        <ListOfPlayers />
      </>
    );
  }
}
