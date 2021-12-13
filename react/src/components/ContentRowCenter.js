import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';

function ContentRowCenter( {products = []}, {users = []}){
    
    return (
        
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            {Array.isArray(products) && products.map( (products, i) => {

                

                return <LastMovieInDb products={products} key={i}/>

            })}
            
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            

                
            {Array.isArray(users) && users.map( (users, i) => {

                

                return <GenresInDb users={users} key={i}/>

            })}
                

            
            

            

        </div>
    )
}

export default ContentRowCenter;