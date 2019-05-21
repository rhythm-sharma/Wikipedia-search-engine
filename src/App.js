import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {

    }
  }


  render() {
    return(
      <div className='container'>
        <div className="heading">
          <h1>W</h1><h2>IKIPEDI</h2><h1>A</h1>
        </div>
        <div className="searchbar">
          <input required="" type="text" className="searchTerm" placeholder="What are you looking for?" />
          <button type="submit" className="searchButton"><i class="fa fa-search fa-lg"></i></button>
        </div>
      </div>
    );
  }
}

export default App;
