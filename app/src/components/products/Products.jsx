//importing modules
import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product';

const products=[
  {id:1,name:'text',description:'text',price:21},
  {id:2,name:'ext',description:'textx',price:121},

];
//component
const Products=()=>{
    return(
    <main>
        <Grid container justify="center" spacing={4}>
        {products.map((product)=>(
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product}/>
                </Grid>
        ))}
        </Grid>
    </main>
    )
}          

//export the component
export default Products;