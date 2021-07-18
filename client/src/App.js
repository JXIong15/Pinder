import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./index.css";
import Login from './containers/Login';
import SignUpForm from './containers/SignUpForm';
import Navbar from './containers/Navbar';
import Matches from './containers/Matches';
import Messages from './containers/Messages';
import Cards from "./containers/Cards";
import Profile from "./containers/Profile";
import Reviews from "./containers/Reviews";
import VideoChat from './containers/VideoChat';
import Barney from './containers/Reviewform';
import ProfileForm from './containers/ProfileForm';
import {PrivateRoute} from './containers/PrivateRoute';
import {Logout} from "./containers/Logout";
import Home from "./containers/Home";


function App() {
  // const [user, setLogin] = useState()
  return (
    <Router>
      <Navbar />


      <div>
        <Switch>
          {/* If !logged-in */}
          {/* <Route exact path="/" component={login} /> */}
          {/* else*/}

          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />

          <PrivateRoute exact path="/logout" component={Logout} />
          <PrivateRoute exact path="/matchme" component={Cards} />
          <PrivateRoute exact path="/message" component={Messages} />

          <PrivateRoute exact path="/reviews/:id" component={Reviews} />
          <PrivateRoute exact path="/profile/:id" component={Profile} />
          <PrivateRoute exact path="/profileform" component={ProfileForm} />
          <PrivateRoute exact path="/videochat" component={VideoChat} />
          <Route exact path="/signup" component={SignUpForm} />
          <PrivateRoute exact path="/matches" component={Matches} />
          <PrivateRoute exact path="/reviewform/:id" component={Barney} />

          <Route path="*" componenet={() => "404 NOT FOUND"} />
        </Switch>
      </div>





    </Router>






  );
}

export default App;
