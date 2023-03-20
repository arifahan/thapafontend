import axios from "axios";
import { createContext, useEffect, useReducer} from "react";
import { useContext } from 'react';
import reducer from "../reducer/productReducer";


const AppContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    products:[],
    featureProducts:[],
    isSingleLoading: false,
    singleProduct:  {},
}

const API = "https://api.pujakaitem.com/api/products";



const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async (url) => {
        dispatch({type:"SET_LOADING"});
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({type:"SET_API_DATA", payload: products})
            console.log(products);
        } catch (error) {
            dispatch({type:"API_ERROR"});
        }
    };

 const getSingleProduct = async (url) => {
            dispatch({type:"SET_SINGLE_lOADING"});
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({type:"SET_SINGLE_PRODUCT", payload: singleProduct})
            
        } catch (error) {
            dispatch({type:"SET_SINGLE_ERROR"})
        }
    }

    
    useEffect(()=> {
        getProducts(API);
    }, []);


    return <AppContext.Provider value={{ ...state, getSingleProduct }}>{ children }</AppContext.Provider> 
};

// custom hook 
const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext,};