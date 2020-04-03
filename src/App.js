import React, {Component} from 'react';
import { start3JS } from './services/threeService'
import './App.css';

class App extends Component {
  componentDidMount() {
    start3JS();
  }

  render() {
    return (
      <div id="App">
      </div >
    );
  }
}

export default App;
