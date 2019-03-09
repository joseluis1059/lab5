import React, { Component } from 'react';
import './App.css';
import PokemonList from './PokemonList';
class App extends Component {
  render() {
    return (
      <div className="App">
       <header className="App-header">      
          <PokemonList/>
        </header>

      </div>
    );
  }
}

export default App;
