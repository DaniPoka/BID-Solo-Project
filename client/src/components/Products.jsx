import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';

const Products = ({ handleShopClick }) => {


    const [items, setItems] = useState([])

    useEffect(() => {
        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/item`);
            setItems(respuesta.data);
            console.log(items);
        }
        getData();
    }, []);


    return (
        <main className='content'>
            <div className="toolBar" />
            <Grid container className='justify-content-center mt-5'>
                {items.map((item) => (
                    <Grid key={item._id}>
                        <Product item={item} handleShopClick={handleShopClick} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;