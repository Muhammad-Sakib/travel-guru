import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Booking from './components/Booking/Booking';
import Search from './components/Search/Search';
import CreateAccount from './components/CreateAccount/CreateAccount';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";





function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route  exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Booking">
            <Booking></Booking>
          </Route>
          <Route path="/Login">
            <Login></Login>
          </Route>
          <Route path="/CreateAccount">
            <CreateAccount></CreateAccount>
          </Route>
          <Route path="/Search">
            <Search></Search>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
