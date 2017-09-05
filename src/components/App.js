import React, { Component } from 'react';

import CustomerList from './CustomerList';
import CustomerDetails from './CustomerDetails';

import AllCardsList from './AllCardsList';
import MyCardsList from './MyCardsList';
import Stats from './Stats';

import '../styles/index.css';

class App extends Component {
    render() {
        return (
          <div className="App">
            <div className="row">
              <div className="col">
                  <CustomerList />
              </div>
              <div className="col">
                  <CustomerDetails />
              </div>
              </div>
              <div className="row">
                  <div className="col">
                      <AllCardsList />
                  </div>
                  <div className="col">
                      <MyCardsList />
                  </div>
                  <div className="col">
                      <Stats />
                  </div>
              </div>
          </div>
      )
    }
}

export default App;
