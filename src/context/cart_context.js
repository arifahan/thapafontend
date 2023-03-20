import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer';


const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("thapaCart");
    // if(localCartData === []){
    //     return [];
    // }else {
    //     return JSON.parse(localCartData);
    // }
    const parsedData = JSON.parse(localCartData);
    if(!Array.isArray(parsedData)) return [];
    return parsedData;


};

const initialState = {
    // cart : [],
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee:5000,
};



const CartPorvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        return dispatch({type: "ADD_TO_CART", payload:{id, color, amount, product}});
    }

    const removeItem = (id) => {
        return dispatch({type: "REMOVE_CART_ITEM", payload: id})
    }

    const clearCart = () => {
        return dispatch({type: "CLEAR_CART"})
    }

    const setDecrease = (id) => {
         dispatch({type: "ITEM_DECREASE", payload:id})
    }
    const setIncrease = (id) => {
         dispatch({type: "ITEM_INCREASE", payload:id})
    }

    // to add the data to localStorage 

    useEffect(() => {
        // dispatch({type: "CART_TOTAL_ITEM"})
        // dispatch({type: "CART_TOTAL_PRICE"})
        dispatch({type: "CART_ITEM_PRICE_TOTAL"})
        localStorage.setItem("thapaCart", JSON.stringify(state.cart))
    }, [state.cart]);


    return (<CartContext.Provider value={{...state, addToCart, removeItem, clearCart, setDecrease, setIncrease}}>{children}</CartContext.Provider>
    );
}

const useCartContext =() => {
    return useContext(CartContext);

}

export {CartPorvider, useCartContext};