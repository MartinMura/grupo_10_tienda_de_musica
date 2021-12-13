import React from "react";

function LastProductInDb({lastProduct}) {

  

  return (
    <div className="col-lg-6 mb-4" style={{width: 50 + "em"}}>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Producto numero {lastProduct.id}
          </h5>
        </div>
        
          <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow" style={{width: 20 + "em"}}>
                <div className="text-center">
                  <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 10 +'rem'}} src={lastProduct.product_image} alt=" último producto "/>
                </div>
                <div className="card-body" >{lastProduct.product_name} </div>
                <div className="card-body" >Precio: ${lastProduct.price} </div>
                <div className="card-body" >Descripción: {lastProduct.product_description} </div>
                <div className="card-body" >Fecha de creación: {lastProduct.created_at} </div>
                </div>
            </div>
            
            </div>
        </div>
    
        
        </div>
    </div>
    );
}

export default LastProductInDb;
