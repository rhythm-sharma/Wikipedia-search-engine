import React from 'react';
import './Loading.css';

const Error = () => {
    return(
        <header className="tc ph5 lh-copy">
            <h1 className="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">404</h1>
            <h2 style={{color:'white'}} className="tc f1-l fw1 white">Sorry, we can't find the result you are looking for.</h2>
        </header>
    );
}

export default Error;