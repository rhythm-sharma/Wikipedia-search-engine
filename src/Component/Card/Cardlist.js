import React from 'react';
import Card from './Card';

const Cardlist = ({SearchResult}) => {
    return(
        <div style={{marginTop:150}}>
            {
                SearchResult.map((item, key) => {
                    return(
                    <Card 
                        key={key} 
                        id={item.id}
                        title={item.title}
                        snippet={item.snippet}
                        pageid={item.pageid}
                    />)
                })
            }
        </div>
    );
}

export default Cardlist;