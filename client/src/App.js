
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import login from './containers/login';
import "./index.css"



// Begin Jou test
// import Cards from "../../containers/cards";
// import userSeed from "./scripts/userDB";
// End Jou test


function App() {
  
  return (

    <Router>
      <div>
        <Switch>
          <Route exact path="/"component={login}></Route>  
        </Switch>
        </div>

      

        <div>
          <Switch>
            {/* If !logged-in */}
            {/* <Route exact path="/" component={login} /> */}
            {/* else
            
            // Jou test 
            {/* <Card seed={userSeed} /> */}
            {/* <Route exact path="/" component={Cards} /> */}

            {/* <Cards /> */}
            {/* End Jou test */}

            
          </Switch>
        </div>

    </Router>






  );
}

export default App;
