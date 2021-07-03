import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider as Provider,
  } from "@apollo/client";


  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  });

  export default function ApolloProvider(props) {
    return <Provider client = {client} {...props} />
  }