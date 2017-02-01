import  React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui';
import NewInfo from './NewInfo';
import AllClientsInfos from './AllClientsInfos';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <h1 className="text-center">User Information</h1>
          <NewInfo />
          <AllClientsInfos />
        </div>
      </MuiThemeProvider>
    )
  }
};
