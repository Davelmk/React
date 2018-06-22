import React, { Component } from 'react';
import GameControl from '../Containers/GameControl';
import {view as TopBar} from './TopBar';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <GameControl/>
      </div>
    );
  }
}

export default App;