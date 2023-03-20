import { createContext, useContext, useReducer } from 'react';
import { useProductContext } from './ProductContext';
import { useEffect } from 'react';
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();


 const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    }
 }
console.log(initialState.filters.price);

export const FilterContextProvider = ({children}) => {

   const { products } = useProductContext();


   const [state, dispatch] = useReducer(reducer, initialState)


//    set grid view 
const setGridView =  () => {
    return dispatch({type: "SET_GRID_VIEW"});
};
// set list view 
const setListView =  () => {
    return dispatch({type: "SET_LIST_VIEW"});
};

// sorting function 

const sorting = (event) => {
    const userValue = event.target.value;
    return dispatch({type: "GET_SORT_VALUE", payload:userValue})
}

//    Update Filtered Data Section 

const upDateFilterValue = (evemt) => {
    let name = evemt.target.name;
    let value = evemt.target.value;

    return dispatch({type: "UPDATE_FILTERS_VALUE", payload:{name, value}})
};


// to clear the filters 
 const clearFilters = (() => {
    dispatch({type:"CLEAR_FILTERS"});
 });


useEffect(()=>{
    dispatch({type:"FILTER_PRODUCTS"})
    dispatch({type:"SORTING_PRODUCTS"});
},[products, state.sorting_value, state.filters]);



   useEffect(() => {
    dispatch({type:"LOAD_FILTER_PORDUCTS", payload: products});
   }, [products]);







    return (
        <FilterContext.Provider value={{...state, setGridView, setListView, sorting, upDateFilterValue, clearFilters}}>
            {children}
        </FilterContext.Provider>
    )
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};

