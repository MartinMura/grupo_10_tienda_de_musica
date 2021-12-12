import React, { useEffect, useState } from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
function ContentWrapper(){
    
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        const url = "http://localhost:3001/api/products";
        fetch( url )
        .then( response => response.json() )
        .then( data => {
        console.log(data.categories);
           setCategories(data.categories); /* no estan hechos dinámicos */

    });
},[]);
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop categories={categories} />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;