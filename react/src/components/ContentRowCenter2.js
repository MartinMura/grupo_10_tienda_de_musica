import React from 'react';
import GenresInDb from './GenresInDb';

function ContentRowCenter2({users = []}){
    
    return (
        <div>
            <h1>Ultimo usuario creado</h1>
            <div className="row">
                
                

                {/*<!-- Genres in DB -->*/}
                

                    
                

                    
                    
                    <GenresInDb users={users}/>

            
                

                
                

                

            </div>
        </div>
    )
}

export default ContentRowCenter2;