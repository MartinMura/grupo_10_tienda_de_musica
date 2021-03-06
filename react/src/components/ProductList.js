import React from 'react';

function ProductList({products}, {color = "#228B22"}){
    

    return(
        <div className="col-lg-6 mb-4">
            
            <div className="card shadow mb-4" style={{width: 20 + "rem"}, {height: 35+ "rem"}, {display: 'flex'}}>
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">{products.product_name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 15 +'rem'}} src={products.pathImg} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>{products.product_description}</p>
                    <p>Precio: <span style={{color}} > {products.price} </span></p>
                    {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a> */}
                </div>
            </div>
        </div>
    )
}

export default ProductList;
