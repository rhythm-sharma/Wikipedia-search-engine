import React, {Component} from 'react';
import Searchbar from './Component/Searchbar/Searchbar';
import Cardlist from './Component/Card/Cardlist';
import {SearchResult} from './SearchResult';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      SearchResult : SearchResult,
      searchfield: ''
    }
  }


  render() {
    return(
      <div>
        <Searchbar />
        <Cardlist SearchResult={this.state.SearchResult} />
      </div>
    );
  }
}

export default App;
