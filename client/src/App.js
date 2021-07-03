<<<<<<< HEAD

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// Components

import Navbar from "./components/Navbar/Navbar";
import Game from './components/Game/Game';
import Chat from './components/Chat/Chat';

// Pages

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';



=======
import logo from './logo.svg';
import './App.css';
>>>>>>> main

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      <Switch>
        <Route exact path="/login" component={Login}/>
      </Switch>
      <Switch>
        <Route exact path="/game" component={Game}/>
      </Switch>
      <Switch>
       <Route exact path="/signup" component={SignUp}/>
      </Switch>
      <Chat />    
      {/* FOOTER HERE */}    
    </Router>
  );
}

export default App;



