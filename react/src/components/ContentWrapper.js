import React, { useEffect, useState } from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
function ContentWrapper(){
    
    const [categories, setCategories] = useState([]);
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);


    
    
    useEffect(() => {
        async function fetchMyAPI() {
            await fetch('http://localhost:3001/api/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data.data)
            })
        }
    
        fetchMyAPI()
        }, [])

    useEffect(() => {
        async function fetchMyAPI() {
            await fetch('http://localhost:3001/api/products')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCategories(data.countByCategory);
                setProducts(data.data);
            })
        }
    
        fetchMyAPI()
        }, [])

    
    let lastUser = users[users.length -1];
    let lastProduct = products[products.length -1];
    
    
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop categories={categories} products={products} users={lastUser} lastProduct={lastProduct} />
                    
                    
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;