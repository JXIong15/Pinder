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
import React, {useState} from 'react';



function App(props) {
  const [user, setLogin] = useState()
  return (
    <Router>
        <Navbar setLogin = {setLogin} user = {user} {...props}/>
        
    
        <div>
          <Switch>
            {/* If !logged-in */}
            {/* <Route exact path="/" component={login} /> */}
            {/* else*/}
            
            {/* // Jou test  */}
            {/* <Card /> */}
            <Route exact path="/" component={Cards} />
            <Route exact path="/message" component={Messages} />
            {/* <Cards /> */}
            <Route exact path="/reviews/:id" component={Reviews} />
            <Route exact path="/profile/:id" component={Profile} />
            {/* End Jou test */}

            <Route exact path="/test" component={VideoChat} />

            <Route exact path="/login" component={Login} />


            <Route exact path="/signup" component={SignUpForm} />

            <Route exact path="/matches" component={Matches} />


          </Switch>
        </div>





    </Router>






  );
}

export default App;
