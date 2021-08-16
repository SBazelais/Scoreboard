import React, { Component } from "react";

class AddPlayerForm extends Component {
  state = {
    value: ""
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          placeholder="Enter a player's name"
        />
        <input type="submit" value="Add player" />
      </form>
    );
  }
}

export default AddPlayerForm;
