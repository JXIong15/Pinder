import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import login from './containers/login';
import "./index.css"



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/"component={login}></Route>  
        </Switch>
      
    </div>

    </Router>
    
  );
}

export default App;
