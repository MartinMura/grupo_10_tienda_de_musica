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
    
        
    
    /* const fetchUsers = () => {
        const url = "http://localhost:3001/api/users";
        fetch( url )
        .then( response => response.json() )
        .then( data => {
        
        setUsers(data.data);
        })
        .then(data => {
            console.log(data);
        });
    }           

    useEffect(() => {
        fetchUsers()
    }, []); */

    

    const fetchProducts = () => {
        
        const url = "http://localhost:3001/api/products";
        fetch( url )
        .then( response => response.json() )
        .then( data => {
        setCategories(data.countByCategory);
        setProducts(data.data);
        
         /* no estan hechos dinámicos */
        });
    }
    useEffect(()=>{
        fetchProducts()
    },[]);

    /* let ultimoProducto = [products.slice(-1).pop()] */

    
    

    /* const fetchUltimoProducto = () => {
        fetch("http://localhost:3001/api/products")
        .then(response => response.json())
        .then(data => {
            console.log(data.data);
            setLastProduct(data.data)

        })
    }
    useEffect(() => {
        fetchUltimoProducto()
    }, []) */

    
    let lastUser = users[users.length -1]
    
    
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop categories={categories} products={products} users={lastUser} />
                    
                    
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;