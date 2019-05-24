import React from 'react';
import './Card.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Card = (props) => {
    const directLink = `https://en.wikipedia.org/?curid=${props.pageid}`;
    return(
      <div className="center grow card">
          <article className="grow center p2 wrapper hidden  b--black-10 mv4" data-aos="fade-up">
          <h1 className="f4 bg-near-white black-60 mv0 pv2 ph3">
              <a className="title black no-underline underline-hover" href={directLink} target="blank">{props.title}</a>
          </h1>
          <div className="pa3 bt b--black-10 bg-white">
          <p dangerouslySetInnerHTML={{__html: props.snippet}} className="f6 f5-ns lh-copy mv0"></p>
          </div>
        </article>
        </div>  
    );
}

export default Card;