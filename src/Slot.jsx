import React, { Component } from 'react';

class Slot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slots: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3400/v1/slots')
      .then(response => response.json()).then((result) => {
        this.setState({
          slots: result,
        });
      });
  }

  render() {
    const { slots } = this.state;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>week_day</th>
            <th>start</th>
            <th>end</th>
            <th>machines</th>
          </tr>
        </thead>
        <tbody>
          {slots.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.week_day}</td>
              <td>{s.start}</td>
              <td>{s.end}</td>
              <td>m</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Slot;

// vim: set ts=2 sw=2 expandtab:
