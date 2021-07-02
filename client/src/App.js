import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components

import Navbar from "./components/Navbar/Navbar";
import Game from './components/Game/Game';

// Pages

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';


function App() {

  const [categories] = useState([
    { name: 'Favorites'},
    { name: 'Invite'},
    { name: 'Games'},
    { name: 'Sign Out'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <Router>
      <Navbar
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
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
      {/* FOOTER HERE */}    
    </Router>
  );
}

export default App;



