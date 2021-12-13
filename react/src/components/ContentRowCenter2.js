import React from 'react';
import LastUserInDb from './LastUserInDb';

function ContentRowCenter2({users = []}){
    
    return (
        <div>
            <h1>Ultimo usuario creado</h1>
            <div className="row">
                
            

                <LastUserInDb users={users}/>
                
            </div>
        </div>
    )
}

export default ContentRowCenter2;