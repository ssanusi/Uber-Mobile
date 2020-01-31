import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {Operation, ApolloLink, concat} from 'apollo-link';
import {withClientState} from 'apollo-link-state';
import {getToken, removeToken, setToken} from '../Utils/Auth/AsyncStorage';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  //credentials:'include'
});

const requestLink = new ApolloLink((operation: Operation, forward) => {
  operation.setContext({
    headers: {
      token: getToken() || '',
    },
  });
  return forward(operation);
});

const localLinkState = withClientState({
  defaults: {
    auth: {
      __typename: 'Auth',
      isLoggedIn: Boolean(getToken()),
    },
  },
  resolvers: {
    Mutation: {
      logUserOut: (_: any, __: any, {cache}) => {
        removeToken();
        cache.writeData({
          data: {
            __typename: 'Auth',
            isLoggedIn: false,
          },
        });

        return null;
      },
      logUserIn: (_, {token}, {cache}) => {
        setToken(token);
        cache.writeData({
          data: {
            __typename: 'Auth',
            isLoggedIn: true,
          },
        });
        return null;
      },
    },
  },
  cache,
});

const client = new ApolloClient({
  link: ApolloLink.from([localLinkState, concat(requestLink, link)]),
  resolvers: {
    Mutation: {
      logUserOut: (_, __, {cache}) => {
        removeToken();
        cache.writeData({
          data: {
            __typename: 'Auth',
            isLoggedIn: false,
          },
        });

        return null;
      },
      logUserIn: (_, {token}, {cache}) => {
        setToken(token);
        cache.writeData({
          data: {
            __typename: 'Auth',
            isLoggedIn: true,
          },
        });
        return null;
      },
    },
  },
  cache,
});

export default client;
