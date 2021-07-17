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
// import PrivateRoute from './PrivateRoute';


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

          <Route exact path="/" component={Cards} />
          <Route exact path="/message" component={Messages} />
          <Route exact path="/reviews/:id" component={Reviews} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/profileform" component={ProfileForm} />
          <Route exact path="/videochat" component={VideoChat} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/matches" component={Matches} />
          <Route exact path="/reviewform/:id" component={Barney} />
        </Switch>
      </div>





    </Router>






  );
}

export default App;
