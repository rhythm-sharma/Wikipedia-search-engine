import React, {Component} from 'react';
import Searchbar from './Component/Searchbar/Searchbar';
import Cardlist from './Component/Card/Cardlist';
import {Error} from './Component/Assets/Error';
import Loading from './Component/Assets/Loading';
import 'tachyons';

class App extends Component {

  constructor() {
    super()
    this.state = {
      SearchResult : '',
      searchfield: '',
      error: false,
      searchbuttonpress: false,
      totalhits: null,
      isLoading: false
    }
  }

  onsearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  fetchResults = (e) => {
      e.preventDefault();
      this.setState({
        searchbuttonpress: true,
        isLoading: true
      })
      console.log(this.state.searchfield);
      // add origin=* to your fetch link to solve CROS error
      fetch(`https://en.wikipedia.org//w/api.php?origin=*&action=query&format=json&list=search&utf8=1&srsearch=${this.state.searchfield}`)
      .then(response => response.json())
      .then(
        data =>
          this.setState({
            SearchResult : data.query.search,
            totalhits: data.query.searchinfo.totalhits,
            isLoading: false
          })
      )
      .catch(error => {
        console.log(error)
        this.setState({
          error: true
        })
      });
  }



  render() {
    console.log( `error` + this.state.error);
    console.log(this.state.totalhits);
    console.log(this.state.SearchResult);
    if (this.state.totalhits === 0) {
      return(
        <div>
          <Searchbar fetchResults={this.fetchResults} searchChange={this.onsearchChange} />
          <Error/>
        </div>
      );
    }
    if(this.state.searchbuttonpress) {
      if(this.state.isLoading) {
        return(
          <div>
            <Searchbar fetchResults={this.fetchResults} searchChange={this.onsearchChange} />
            <Loading/>
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
    return(
      <div>
        <Searchbar fetchResults={this.fetchResults} searchChange={this.onsearchChange} />
      </div>
    );
  }
}

export default App;
