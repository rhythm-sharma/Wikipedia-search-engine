import React from 'react';
import './Card.css';

const Card = (props) => {
    return(
            <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4 grow bw5 shadow-10">
                <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">{props.title}</h1>
                <div className="pa3 bt b--black-10">
                    <p className="f6 f5-ns lh-copy measure">{props.extract}</p>
                </div>
            </article>
    );
}

export default Card;