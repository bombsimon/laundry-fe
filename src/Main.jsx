import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import HomePage from './Home';
import Booker from './Booker';
import Booking from './Booking';
import Slot from './Slot';
import Machine from './Machine';

export const Main = () => (
  <HashRouter>
    <div>
      <h1>Laundry</h1>
      <ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/bookers">Bookers</NavLink></li>
        <li><NavLink to="/bookings">Bookings</NavLink></li>
        <li><NavLink to="/slots">Slots</NavLink></li>
        <li><NavLink to="/machines">Machines</NavLink></li>
      </ul>
      <div className="content">
        <Route exact path="/" component={HomePage} />
        <Route path="/bookers" component={Booker} />
        <Route path="/bookings" component={Booking} />
        <Route path="/slots" component={Slot} />
        <Route path="/machines" component={Machine} />
      </div>
    </div>
  </HashRouter>
);

export default Main;

// vim: set ts=2 sw=2 expandtab:
