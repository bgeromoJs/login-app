import React, { Component } from "react";

class New extends Component {
  state = {
    user: "",
    password: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="User"
          placeholder="Autor do post"
          onChange={this.handleChange}
          value={this.state.user}
        />

        <input
          type="password"
          name="Password"
          placeholder="Password"
          onChange={this.handleChange}
          value={this.state.password}
        />

        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default New;
