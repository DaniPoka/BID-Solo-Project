import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';

const Products = ({ }) => {


    const [items, setItems] = useState([])

    const getData = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/item`);
        setItems(res.data);
        console.log(res.data);
    }

    useEffect(() => {

        getData();
    }, []);



    return (
        <main className='container'>
            <div className="toolBar" />
            <Grid container className='justify-content-center mt-5'>
                {items.map((item) => {
                    console.log(item)
                    return (
                        <Grid key={item._id}>
                            <Product item={item} />
                        </Grid>
                    )
                })}
            </Grid>
        </main>
    );
}

export default Products;