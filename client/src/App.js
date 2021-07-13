import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./index.css";
import Login from './containers/Login';
import Forms from './containers/Forms';
import Navbar from './containers/Navbar';
import Matches from './containers/Matches';
import Messages from './containers/Messages';
import Cards from "./containers/Cards";
import Review from "./containers/Reviews";
import VideoChat from './containers/VideoChat';



function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          {/* <Route exact path="/"component={login}></Route>   */}
        </Switch>
        </div>

    
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
            <Route exact path="/reviews" component={Review} />
            {/* End Jou test */}

            <Route exact path="/test" component={VideoChat} />

            <Route exact path="/login" component={Login} />


            <Route exact path="/forms" component={Forms} />

            <Route exact path="/matches" component={Matches} />


          </Switch>
        </div>





    </Router>






  );
}

export default App;
