
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import login from './containers/login';
import "./index.css"



// Begin Jou test
import Cards from "./containers/cards";
import Review from "./containers/reviews";
import VideoChat from './containers/VideoChat';
// End Jou test


function App() {
  
  return (

    <Router>
      <div>
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

            {/* <Cards /> */}
            <Route exact path="/reviews" component={Review} />
            {/* End Jou test */}

            <Route exact path="/test" component={VideoChat} />
          </Switch>
        </div>

    </Router>






  );
}

export default App;
