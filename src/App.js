import React, {Component} from 'react';
import Searchbar from './Component/Searchbar/Searchbar';
import Cardlist from './Component/Card/Cardlist';
import Error from './Component/Assets/Error';
import Loading from './Component/Assets/Loading';
import './App.css';
import 'tachyons';

class App extends Component {

  constructor() {
    super()
    this.state = {
      SearchResult : '',
      searchfield: '',
      error: false,
      showcards: false,
      searchbuttonpress: false,
      totalhits: null
    }
  }

  onsearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  fetchResults = () => {
    this.setState({
      searchbuttonpress: true
    })
    console.log(this.state.searchfield);
    fetch(`https://en.wikipedia.org//w/api.php?origin=*&action=query&format=json&list=search&utf8=1&srsearch=${this.state.searchfield}`)
    .then(response => response.json())
    .then(
      data =>
        this.setState({
          SearchResult : data.query.search,
          totalhits: data.query.searchinfo.totalhits,
          showcards : true
        })
    )
    .catch(error => {
      console.log(error)
      this.setState({
        error: true
      })
    });
    // window.location.reload();
  }



  render() {
    console.log(this.state.error);
    console.log(this.state.totalhits);
    if (this.state.error || this.state.totalhits === 0) {
      return(
        <div>
          <Searchbar fetchResults={this.fetchResults} searchChange={this.onsearchChange} />
          <Error/>
        </div>
      );
    }
    if(this.state.searchbuttonpress) {
        if(this.state.showcards) {
          return(
            <div>
              <Searchbar fetchResults={this.fetchResults} searchChange={this.onsearchChange} />
              <Cardlist SearchResult={this.state.SearchResult} />
            </div>
          );
        }
          return(
            <div>
              <Searchbar fetchResults={this.fetchResults} searchChange={this.onsearchChange} />
              <Loading/>    
            </div>
          );
    }
          return(
            <div>
              <Searchbar fetchResults={this.fetchResults} searchChange={this.onsearchChange} />
            </div>
          );
  }
}

export default App;
