import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StickyContainer, Sticky } from 'react-sticky';
import logo from './logo.svg';
import './App.css';
import Grid from './Grid'
import AppBar from './AppBar'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <StickyContainer>
          <Sticky style={{ height: 64, zIndex: 5 }}>
            <AppBar />
          </Sticky>
          <Grid />
        </StickyContainer>
      </MuiThemeProvider>
    );
  }
}

export default App;
