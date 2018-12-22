import React, { Component } from "react";

class Machine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      machines: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3400/v1/machines')
      .then(response => {
        return response.json();
      }).then(result => {
        this.setState({
          machines: result
        });
      });
  }

  render() {
    const machines = this.state.machines

    return (
      <table width="100%">
        <thead>
          <tr>
            <th>id</th>
            <th>info</th>
            <th>working</th>
          </tr>
        </thead>
        <tbody>
          {machines.map(m => <tr key={m.id}><td>{m.id}</td><td>{m.info}</td><td>{m.working.toString()}</td></tr>)}
        </tbody>
      </table>
    );
  }
}

export default Machine;

// vim: set ts=2 sw=2 expandtab:
