import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import NavBar from './navbar';
import Posts from './posts';
import Contact from './contact';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
          <TypoGraphy variant="title" color="inherit">
              My header
          </TypoGraphy>
          <NavBar></NavBar>
          </Toolbar>
        </AppBar>
        <Posts></Posts>
        <Contact></Contact>
      </div>
    );
  }
}
export default App;
