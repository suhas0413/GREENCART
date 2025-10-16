import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{

    const currency = import.meta.VITE_CURRENCY;


    const navigate = useNavigate();

    const [user, setUser] = useState(null)
    const [isSeller, setisSeller] = useState(false)
    const [showUserLogin, setshowUserLogin] = useState(true)
    const [Products, setProducts] = useState([])
    const [cartItems, setcartItems] = useState({})

    const fetchProducts = async ()=>{
        setProducts(dummyProducts)
    }
// Add Product to Cart
const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
        cartData[itemId] += 1;
    } else {
        cartData[itemId] = 1;
    }
    setcartItems(cartData);
    toast.success("Added to Cart");
};


    //update cart item quality
    const updateCartItem = (itemId, quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setcartItems(cartData)
        toast.success("Cart Updated")
    }

    // remove product from cart

    const removeFromCart = (itemId)=>{
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId] -= 1;
            if(cartData[itemId] === 0){
                delete cartData[itemId];
            }
        }
        toast.success("Removed from Cart")
        setcartItems(cartData)
    }


        useEffect(()=>{
            fetchProducts()
        },[])

    const value = {navigate, user, setUser, setisSeller ,isSeller,showUserLogin ,setshowUserLogin, Products, currency, addToCart, updateCartItem, removeFromCart, cartItems}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext =()=>{
    return useContext(AppContext)
}