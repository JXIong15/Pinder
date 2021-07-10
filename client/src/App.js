
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './containers/Login';
import "./index.css";
import Forms from './containers/Forms';
import Navbar from './containers/Navbar';



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

            {/* <Cards /> */}
            <Route exact path="/reviews" component={Review} />
            {/* End Jou test */}

            <Route exact path="/test" component={VideoChat} />

            <Route exact path="/login" component={Login} />


            <Route exact path="/forms" component={Forms} />

          </Switch>
        </div>





    </Router>






  );
}

export default App;
