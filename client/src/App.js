import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./index.css";
import LoginForm from './containers/LoginForm';
import SignUpForm from './containers/SignUpForm';
// import Navbar from './containers/Navbar';
import Matches from './containers/Matches';
import Messages from './containers/Messages';
import Cards from "./containers/Cards";
import Profile from "./containers/Profile";
import Reviews from "./containers/Reviews";
import VideoChat from './containers/VideoChat';
import Barney from './containers/Forms/Reviewform';
import ProfileForm from './containers/Forms/ProfileForm';
import { PrivateRoute } from './utils/PrivateRoute';
import Home from "./containers/Home";

// import './App.css';
import NavBar from "./containers/NavBar/index.js";
import Hero from './containers/Hero';
// import Signup from './components/SignUpForm';

function App() {

  return (
    <Router>
      <NavBar />
      <Hero />


      {/* MATCHES AND HOME DON'T WORK RIGHT AWAY */}
      <div>
        <Switch>
          {/* If !logged-in */}
          {/* <Route exact path="/" component={login} /> */}
          {/* else*/}
          {/* <Route exact path="/signup" component={SignUpForm} /> */}
          <Route exact path="/login" component={LoginForm} />

          <Route exact path="/" component={Home} />
          <Route exact path="/matchme" component={Cards} />
          {/* add /:id */}
          <Route exact path="/message" component={Messages} />
          <Route exact path="/reviews/:id" component={Reviews} />
          <Route exact path="/profile/:id" component={Profile} />
          {/* <Route exact path="/profileform" component={ProfileForm} /> */}
          <Route exact path="/videochat" component={VideoChat} />
          <Route exact path="/matches" component={Matches} />
          <Route exact path="/reviewform/:id" component={Barney} />
          <Route exact path="/signup" component={SignUpForm} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/profileform/:id" component={ProfileForm} />

          {/* <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/matchme" component={Cards} />
          <PrivateRoute exact path="/message" component={Messages} />
          <PrivateRoute exact path="/reviews/:id" component={Reviews} />
          <PrivateRoute exact path="/profile/:id" component={Profile} />

          <PrivateRoute exact path="/profileform/:id" component={ProfileForm} />
          <PrivateRoute exact path="/videochat" component={VideoChat} />
          <Route exact path="/videochat" component={VideoChat} />

       <PrivateRoute exact path="/videochat" component={VideoChat} />

          <PrivateRoute exact path="/matches" component={Matches} />
          <PrivateRoute exact path="/reviewform/:id" component={Barney} /> */}

          <Route path="*" componenet={() => "404 NOT FOUND"} />
        </Switch>
      </div>





    </Router>






  );
}

export default App;
