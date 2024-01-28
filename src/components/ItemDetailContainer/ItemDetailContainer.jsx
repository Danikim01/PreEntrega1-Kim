/* eslint-disable react/prop-types */
import React from 'react'
import {useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import ItemDetail from '../ItemDetail/ItemDetail'

import {
    collection,
    query,
    getDocs,
    where,
    documentId,
} from "firebase/firestore"

import {db} from "../../firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        console.log(id)
        const getItem = async () => {
            const q = query(
                collection(db,"items"),
                where(documentId(),"==",id)
            );
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc)=>{
                docs.push({ ...doc.data(), id: doc.id });
            })
            console.log(docs)
            setItem(docs)
        }
        getItem()
    },[id]);


    return (
    <>
        {item.map((data)=>{
           return (
            <Link to={`/item/${data.id}`} key={data.id}>
                <ItemDetail item={data} id={id}/> 
            </Link>
           ) 
        })}
    </>
  )
}

export default ItemDetailContainer