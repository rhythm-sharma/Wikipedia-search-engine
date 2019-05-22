import React from 'react';
import './Searchbar.css'

const Searchbar = ({fetchResults ,searchChange}) => {
        return(
            <div className='container'>
                <div className="heading">
                    <h1>W</h1><h2>IKIPEDI</h2><h1>A</h1>
                </div>
                <div className="searchbar ba b--white" style={{borderRadius:27}}>
                    <input onChange={searchChange} required="" type="text" className="searchTerm" placeholder="What are you looking for?" />
                    <button onClick={fetchResults}  type="submit" className="searchButton"><i className="fa fa-search fa-lg"></i></button>
                </div>
            </div>
        );
}

export default Searchbar;