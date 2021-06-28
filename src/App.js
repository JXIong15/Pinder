import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import login from './containers/login';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/"component={login}></Route>  
        </Switch>
      Hello world
    </div>

    </Router>
    
  );
}

export default App;
