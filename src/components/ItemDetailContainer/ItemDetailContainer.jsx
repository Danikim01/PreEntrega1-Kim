import React, { useState, useEffect } from 'react'
import { getItem} from '../../../data/asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Loader/Spinner';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getItem();
            setItem(result);
        }
        fetchData()

    }, []);


    return (
        <>
        <div className='contenedorTarjetas'>
            {item ? 
                <>
                    <ItemDetail item={item} />
                    <ItemDetail item={item} />
                    <ItemDetail item={item} />
                    <ItemDetail item={item} />
                    <ItemDetail item={item} />
                </>
             : 
                <Spinner></Spinner>
            }
        </div>
        </>
    );
    
}

export default ItemDetailContainer