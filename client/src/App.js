
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components

import Navbar from "./components/Navbar/Navbar";
import Game from './components/Game/Game';

// Pages

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Navbar}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/game" component={Game}/>
      </Switch>
    </Router>
  );
}

export default App;



