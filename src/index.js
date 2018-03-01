import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost'
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const client = new ApolloClient({
  uri: 'https://dev-main.bindo.io/api/v5/graphql'
})

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);
