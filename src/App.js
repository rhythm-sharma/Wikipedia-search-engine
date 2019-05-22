import React, {Component} from 'react';
import Searchbar from './Component/Searchbar/Searchbar';
import Cardlist from './Component/Card/Cardlist';
// import Error from './Component/Error/Error';
import './App.css';
import 'tachyons';

class App extends Component {

  constructor() {
    super()
    this.state = {
      SearchResult : '',
      searchfield: '',
      showcards: false
    }
  }

  onsearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  fetchResults = () => {
    console.log(this.state.searchfield);
    fetch(`https://en.wikipedia.org//w/api.php?origin=*&action=query&format=json&list=search&utf8=1&srsearch=${this.state.searchfield}`)
    .then(response => response.json())
    .then(
      data =>
        this.setState({
          SearchResult : data.query.search,
          showcards : true
        })
    )
    .catch(error => console.log(error));
  }

  render() {
      if(!(this.state.showcards)) {
        return(
          <div>
            <Searchbar fetchResults={this.fetchResults} searchChange={this.onsearchChange} />
          </div>
        );
      }else {
        return(
          <div>
            <Searchbar fetchResults={this.fetchResults} searchChange={this.onsearchChange} />
            <Cardlist SearchResult={this.state.SearchResult} />
          </div>
        );
      }
  }
}

export default App;
