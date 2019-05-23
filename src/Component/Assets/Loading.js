import React from 'react';
import logo from './Loading.gif'
import './Loading.css';

const Loading = () => {
    return(
        <div className="loading center">
            <img className="center" src={logo} alt="Flowers in Chania" />             
        </div>
    );
}

export default Loading;