import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCartList] = useState([])

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

    const addToCart = (name,quantity,price,image,id) => {
        //Implementar la funcionalidad de agregar un producto al carrito
        const search = cart.find(item => item.name === name)
        if (search){
            search.quantity += quantity
            setCartList([...cart])
        }else{
            setCartList([...cart, {name,quantity,price,image,id}])
        }
    }
    const removeList = () => {
        setCartList([])    
    }
    const deleteItem = (itemId) => {
        setCartList(cart.filter(item => item.id !== itemId))
    }
    return (
        <CartContext.Provider value={[cart, addToCart, removeList, deleteItem,amountOfItems]}>
            {children}
        </CartContext.Provider>
    )
}

