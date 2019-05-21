import React from 'react';
import Card from './Card';

const Cardlist = ({SearchResult}) => {
    return(
        <div>
            {
                SearchResult.map((item, key) => {
                    return(
                    <Card 
                        key={key} 
                        id={item.id}
                        title={item.title}
                        extract={item.extract} 
                    />)
                })
            }
        </div>
    );
}

export default Cardlist;