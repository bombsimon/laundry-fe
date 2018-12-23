import React, { Component } from 'react';

class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
    };
  }

  componentDidMount() {
    window.fetch('http://localhost:3400/v1/bookings')
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        if (response.headers.get('content-length') < 1) {
          throw Error('no body');
        }

        return response;
      })
      .then(response => response.json()).then((result) => {
        this.setState({
          bookings: result,
        });
      })
      .catch(error => console.log(error));
  }


  render() {
    const { bookings } = this.state;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>book_date</th>
            <th>id_slot</th>
            <th>id_booker</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.book_date}</td>
              <td>{b.id_slot}</td>
              <td>{b.id_booker}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Bookings;

// vim: set ts=2 sw=2 expandtab:
