import React,{useState,useEffect} from 'react'
import {commerce} from './lib/commerce';
import {Products,Navbar,Cart} from './components'
const App = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState({});

    const fetchProducts=async ()=>{
        const {data} =await commerce.products.list();
        setProducts(data);
    }

    const fetchCart=async()=>{
        setCart(await commerce.cart.retrieve())
    }

    useEffect(()=>{
        fetchProducts();
        fetchCart();
    },[]);
    
    const handleAddCart=async(productId,quantity)=>{
        const item =await commerce.cart.add(productId,quantity);
        setCart(item.cart);
    }
   
    return (
        <div> 
            <Navbar totalItems={cart.total_items}/>
            {/* <Products products={products} onAddToCart={handleAddCart}/> */}
            <Cart cart={cart}/>
        </div>
    )
}

export default App
