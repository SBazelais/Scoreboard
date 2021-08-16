import React from "react";
import "./styles.css";
import { Header } from "./components/Header";
import { PlayersData } from "./database/PlayersData";
import { ListOfPlayers } from "./components/ListOfPlayers";
import AddPlayerForm from "./components/AddPlayerForm";

export default class App extends React.Component {
  state = {
    players: PlayersData
  };

  prevPlayerId = 8;

  handleAddPlayer = (name) => {
    this.setState({
      players: [
        ...this.state.players,
        {
          name,
          score: 0,
          id: (this.prevPlayerId += 1)
        }
      ]
    });
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((player) => player.id !== id)
      };
    });
  };

  handleScoreChange = (index, scoreChange) => {
    this.setState((prevState) => ({
      score: (prevState.players[index].score += scoreChange)
    }));
  };

  render() {
    return (
      <>
        <Header title="Scoreboard" players={this.state.players} />
        <ListOfPlayers
          players={this.state.players}
          removePlayer={this.handleRemovePlayer}
          handleScoreChange={this.handleScoreChange}
        />
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </>
    );
  }
}
