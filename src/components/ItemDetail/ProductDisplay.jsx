import React,{useContext} from 'react'
import "./ProductDisplay.css"
import ItemCount from '../ItemCount/ItemCount'
import {CartContext} from '../Context/CartContext'

const ProductDisplay = ({item,id}) => {
    const [cart, addToCart, removeList, deleteItem, amountOfItems] = useContext(CartContext);
    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={item.img} alt={item.name} className='productdisplay-img' />
                    <img src={item.img} alt={item.name} className='productdisplay-img' />
                    <img src={item.img} alt={item.name} className='productdisplay-img' />
                    <img src={item.img} alt={item.name} className='productdisplay-img' />
                </div>
                <div className='productdisplay-img'>
                    <img src={item.img} alt={item.name} className='productdisplay-main-img' />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{item.name}</h1>
                <div className='productdisplay-right-price'>
                    ${item.price}
                </div>
                <div className='productdisplay-right-description'>
                    <p>{item.description}</p>
                </div>
                <div className="productdisplay-right-size">
                    <h1>Talles:</h1>
                    <div className='productdisplay-right-sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXl</div>
                    </div>
                </div>
                <div className='productdisplay-right-color'>
                    <h1>Colores:</h1>
                    <div className='productdisplay-right-colors'>
                        <div>Rojo</div>
                        <div>Azul</div>
                        <div>Verde</div>
                        <div>Negro</div>
                        <div>Amarillo</div>
                    </div>
                </div>
                <ItemCount item={item} id={id} addToCart={addToCart}/>
            </div>
            
        </div>
    )
}

export default ProductDisplay