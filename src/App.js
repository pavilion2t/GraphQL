import React, { Component } from 'react';
import './App.css';
import "../node_modules/graphiql/graphiql.css"

import Sidebar from "./Sidebar"
import Main from "./Main"
import Checkout from "./Checkout"
import GraphiQL from "graphiql"
import { BrowserRouter as Router, Route } from "react-router-dom"

function graphQLFetcher(graphQLParams) {
  return fetch('https://dev-main.bindo.io/api/v5/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Sidebar/>
          <Router>
            <div>
            <Route path="/" component={Main} />
            <Route path="checkout" component={Checkout}/>
            </div>
          </Router>
        </div>
        <div className="g">
          <GraphiQL fetcher={graphQLFetcher} />
        </div>
      </div>
    )
  }
}

export default App;
