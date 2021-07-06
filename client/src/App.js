
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home}/>
      </Switch>
      <Switch>
        <Route exact path="/login" component={Login}/>
      </Switch>
      <Switch>
       <Route exact path="/" component={SignUp}/>
      </Switch>  
      {/* FOOTER HERE */}    
    </Router>
  );
}

export default App;



