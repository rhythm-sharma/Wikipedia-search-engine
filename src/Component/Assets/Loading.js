import React from 'react';
import logo from './Loading.gif'
import './Loading.css';

const Loading = () => {
    return(
        <div className="loading center">
            <img className="center" src={logo} alt="Loading" />             
        </div>
    );
}

export default Loading;