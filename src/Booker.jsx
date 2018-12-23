import React, { Component } from 'react';

class Booker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookers: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3400/v1/bookers')
      .then(response => response.json()).then((result) => {
        this.setState({
          bookers: result,
        });
      });
  }

  render() {
    const { bookers } = this.state;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>identifier</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {bookers.map(b => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.identifier}</td>
              <td>{b.name}</td>
              <td>{b.email}</td>
              <td>{b.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Booker;

// vim: set ts=2 sw=2 expandtab:
