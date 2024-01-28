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
import { query, collection, getDocs,where} from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const {categoryId} = useParams()


  useEffect(() => {
    const getIems = async () => {
      let q = query(
        collection(db,"items")
      )
      if (categoryId){
        q = query(
          collection(db,"items"),
          where("category", "==", categoryId)
        )
      }
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id});
      });
      setItems(docs)
    }
    getIems()
  }, [categoryId]);  


return (
  <>
    <ItemList items={items} />
  </>
);
}

export default ItemListContainer