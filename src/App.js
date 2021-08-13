import React from "react";
import "./styles.css";
import { Header } from "./components/Header";
import { PlayersData } from "./database/PlayersData";
import { ListOfPlayers } from "./components/ListOfPlayers";

export default class App extends React.Component {
  state = {
    players: PlayersData
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((player) => player.id !== id)
      };
    });
  };

  render() {
    return (
      <>
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />
        <ListOfPlayers
          players={this.state.players}
          removePlayer={this.handleRemovePlayer}
        />
      </>
    );
  }
}
