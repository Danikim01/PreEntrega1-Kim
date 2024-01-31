/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { collection, query, getDocs, where, documentId } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import Spinner from '../Spinner/Spinner';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getItem = async () => {
      const q = query(collection(db, 'items'), where(documentId(), '==', id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItem(docs);
      setLoading(false);
    };

    getItem();
  }, [id]);

  return (
    <>  
      {loading ? (
        <Spinner/>
      ) : item.length === 0 ? (
        <h1 style={{marginTop:"50px"}}>Product not found. Please check the ID or choose another product.</h1>
      ) : (
        item.map((data) => (
          <Link to={`/item/${data.id}`} key={data.id}>
            <ItemDetail item={data} id={id} />
          </Link>
        ))
      )}
    </>
  );
};

export default ItemDetailContainer;
