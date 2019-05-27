import React from 'react';
import './Searchbar.css'

const Searchbar = ({fetchResults ,searchChange}) => {
        return(
            <div className='container'>
                <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Wikipedia</h1>
                <h2 className="fw1 f3 white-80 mt3 mb4">Search Engine</h2>
                <p className="white-80 mt3 mb4"><a className="white randon-link" href="https://en.wikipedia.org/wiki/Special:Random"  target="blank"><i className="fas fa-link"></i>Click here for a random article</a></p>
                <form onSubmit={fetchResults}  className="search-form ba b--white">
                    <input onChange={searchChange} required pattern=".*\S+.*" title="Please don't use white spaces :)"   type="text" className="search-field" placeholder="What are you looking for?" />
                    <button type="submit" className="button-search"><i className="fa fa-search fa-lg"></i></button>
                </form>
                {/* <form method="GET" className="search-form">
                    <input onChange={searchChange} required type="search" className="search-field" placeholder="What are you looking for?" />
                    <button onClick={fetchResults} type="submit" class="button-search"><i className="fa fa-search fa-lg"></i></button>
                </form> */}
            </div>
        );
}

export default Searchbar;