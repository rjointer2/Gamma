
// apollo graphql client provide and cacher

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';


// set the headers here

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// for testing graphql interface

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});





function App() {
  return (
    <ApolloProvider client={client}>
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
        <Switch>
          <Route exact path="/signin" component={SignIn}/>
        </Switch> 
        {/* FOOTER HERE */}    
      </Router>
    </ApolloProvider>
  );
}

export default App;



