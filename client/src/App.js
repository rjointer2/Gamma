
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Footer from './components/Footer/Footer';

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
       <Route exact path="/signup" component={SignUp}/>
      </Switch>  
      <Footer />
    </Router>
  );
}

export default App;



