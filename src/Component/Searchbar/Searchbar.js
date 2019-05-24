import React from 'react';
import './Searchbar.css'

const Searchbar = ({fetchResults ,searchChange}) => {
        return(
            <div className='container'>
                <div className="heading">
                    <h1>W</h1><h2>IKIPEDI</h2><h1>A</h1>
                </div>
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