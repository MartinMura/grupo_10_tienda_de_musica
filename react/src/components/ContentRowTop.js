import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowCenter2 from "./ContentRowCenter2";
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';

function ContentRowTop(props){
	console.log(props);
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Categorias Productos</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies categories={props.categories} />
					<h1>Listado de Productos</h1>
					<ContentRowCenter products={props.products} users={props.users}/>
					<ContentRowCenter2 users={props.users}/>
					<Chart />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;