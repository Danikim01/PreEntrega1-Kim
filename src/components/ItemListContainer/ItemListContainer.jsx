/* eslint-disable react/prop-types */
import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import Spinner from '../Spinner/Spinner'

//Import Firebase
import {db} from "../../firebase/firebaseConfig"
import { query, collection, getDocs,where} from "firebase/firestore";


const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const {categoryId} = useParams()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const getItems = async () => {
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
      setLoading(false)
    }
    getItems()
  }, [categoryId]);  


return (
  <>
    {categoryId ? <h2>{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</h2> : <h1>Welcome to our Shop!</h1>}
    {loading ? <Spinner/> : <ItemList items={items}/>}
  </>
);
}

export default ItemListContainer