
// apollo graphql client provide and cacher

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// components
import Footer from './components/Footer/Footer';
import inDevelopment from './components/inDevelopment/inDevelopment';
// import FriendList from './components/FriendList/FriendList';

// Pages
import Home from './pages/Home/Home';
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

// token here
const token = authClient.loggedIn() ? authClient.getToken() : null;
// if the log in is true then get the token from local Storage and if falsy
// we can direct the user the sign in page "/"



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home}/>
        </Switch>
        <Switch>
          <Route exact path="/inDevelopment" component={inDevelopment}/>
        </Switch>
        <Switch>
          <Route exact path="/" component={SignUp}>
            {
              token ? <Redirect to="/home"/> : <SignUp />
            }
          </Route>
        </Switch> 
        <Switch>
          <Route exact path="/signin" component={SignIn}/>
        </Switch> 
        {/* <FriendList /> */}
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;



