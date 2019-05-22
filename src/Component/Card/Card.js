import React from 'react';
import './Card.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Card = (props) => {
    const directLink = `https://en.wikipedia.org/?curid=${props.pageid}`;
    return(
            <article className="center mw5 mw6-ns hidden ba mv4 grow br3 shadow-5" data-aos="fade-up">
            <h1 className="f4 bg-near-black white mv0 pv2 ph3">
              <a className="white no-underline underline-hover" href={directLink} target="blank">{props.title}</a>
            </h1>
            <div className="pa3 bt">
              <p dangerouslySetInnerHTML={{__html: props.snippet}} className="f6 f5-ns lh-copy measure mv0"></p>
            </div>
          </article>
    );
}

export default Card;