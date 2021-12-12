import React from 'react';
import SmallCard from './SmallCard';



function ContentRowMovies({categories = []}){


    return (
    
        <div className="row">
            
            {Array.isArray(categories) && categories.map( (cat, i) => {

                return <SmallCard cat={cat} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;