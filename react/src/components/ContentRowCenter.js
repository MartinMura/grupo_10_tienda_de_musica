import React from 'react';
import ProductList from './ProductList';
import LastUserInDb from './LastUserInDb';

function ContentRowCenter( {products = []}, {users = []}){
    
    return (
        
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            {Array.isArray(products) && products.map( (products, i) => {

                

                return <ProductList products={products} key={i}/>

            })}
            
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            

                
            {Array.isArray(users) && users.map( (users, i) => {

                

                return <LastUserInDb users={users} key={i}/>

            })}
                

            
            

            

        </div>
    )
}

export default ContentRowCenter;