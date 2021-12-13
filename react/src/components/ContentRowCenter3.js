import React from 'react';
import LastProductInDb from './LastProductInDb';

function ContentRowCenter3({lastProduct = []}){
    
    return (
        <div>
            <h1>Ultimo producto creado</h1>
            <div className="row">
                
                {/*<!-- Genres in DB -->*/}
                
                <LastProductInDb lastProduct={lastProduct}/>

            </div>
        </div>
    )
}

export default ContentRowCenter3;