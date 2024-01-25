/* eslint-disable react/prop-types */
import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './ItemListContainer.css'
import UserCard from '../UserCard/UserCard'
import ItemList from '../ItemList/ItemList'

//Import Firebase
import {db} from "../../firebase/firebaseConfig"
import { query, collection, getDocs} from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = async () => {
      const q = query(
        collection(db,"items")
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id});
      });
      setItems(docs);
    };
    getItems();
  }, []);  

  return (
    <>
      {
        <div>
          <ItemList items={items}/>
        </div>
      }
    </>
  );
  
}

export default ItemListContainer