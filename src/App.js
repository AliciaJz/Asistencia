import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const ListClases = gql `
  query {
    listClases {
      items {
        id
        nombreClase
        Ponente
      }
    }
  }
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Cambia <code>src/App.js</code> and save to reload.
          </p>
          {
            this.props.clases.map((item, i) => {
              return <p key={i}> {item.id}</p>
             })
          }
        </header>
      </div>
    );
  }
}

export default compose(
  graphql(ListClases, {
    options: {
      fetchPolicy: 'cache-and-network'
    },
    props: props => ({
      clases: props.data.listClases ? props.data.listClases.items : []
    })
  })
)(App);
