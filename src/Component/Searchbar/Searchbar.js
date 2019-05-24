import React from 'react';
import './Searchbar.css'

const Searchbar = ({fetchResults ,searchChange}) => {
        return(
            <div className='container'>
                <h1 class="f2 f1-l fw2 white-90 mb0 lh-title">Wikipedia</h1>
                <h2 class="fw1 f3 white-80 mt3 mb4">Search Engine</h2>
                <p class="white-80 mt3 mb4"><a className="white randon-link" href="https://en.wikipedia.org/wiki/Special:Random"  target="blank"><i class="fas fa-link"></i>Click here for a random article</a></p>
                <div className="search-form ba b--white">
                    <input onChange={searchChange} type="text" className="search-field" placeholder="What are you looking for?" />
                    <button onClick={fetchResults}  type="submit" className="button-search"><i className="fa fa-search fa-lg"></i></button>
                </div>
                {/* <form method="GET" className="search-form">
                    <input onChange={searchChange} required type="search" className="search-field" placeholder="What are you looking for?" />
                    <button onClick={fetchResults} type="submit" class="button-search"><i className="fa fa-search fa-lg"></i></button>
                </form> */}
            </div>
        );
}

export default Searchbar;