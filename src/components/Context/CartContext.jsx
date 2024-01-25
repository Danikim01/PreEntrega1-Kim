import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCartList] = useState([])
    const [counter,setCounter] = useState(1)

    const amountOfItems = () => {
        //Implementar la funcionalidad de contar la cantidad de items en el carrito sean iguales o no
        if (cart.length === 0){
            return 0
        }
        let cartCount = 0
        cart.forEach(item => {
            cartCount += item.quantity
        })
        return cartCount
    }

    const addToCart = (name,quantity,price,image) => {
        //Implementar la funcionalidad de agregar un producto al carrito
        const search = cart.find(item => item.name === name)
        if (search){
            search.quantity += quantity
            //update the cart with the new quantity
            setCartList([...cart])
            return
        }else{
            setCartList([...cart, {name,quantity,price,image}])
        }
    }
    const removeList = () => {
        //Implementa la funcionalidad de dejar el carrito vacio
        setCartList([])    
    }
    const deleteItem = (itemId) => {
        //Implementa la funcionalidad de eliminar un item del carrito
        setCartList(cart.filter(item => item.id !== itemId))
    }
    return (
        <CartContext.Provider value={[cart, addToCart, removeList, deleteItem,counter,setCounter,amountOfItems]}>
            {children}
        </CartContext.Provider>
    )
}

