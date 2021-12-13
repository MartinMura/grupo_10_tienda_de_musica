import React from 'react';
import SmallCard from './SmallCard';
import SmallCard2 from "./SmallCard2";



function ContentRowMovies({categories = []}){


    return (
    
        <div className="row" style={{width: 50 + "rem"}}>
            <SmallCard2 categories={categories.length} />
            
            {Array.isArray(categories) && categories.map( (cat, i) => {

                return <SmallCard cat={cat} key={i}/>
            
            })}

            


        </div>
    )
}

export default ContentRowMovies;