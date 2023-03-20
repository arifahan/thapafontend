

const cartReducer = (state, action ) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let {id, color, amount, product} = action.payload;

            let existingProcuct = state.cart.find((curElem) => curElem.id === id + color);
            
            if(existingProcuct){
                let updatedProduct = state.cart.map((curElem) => {
                    if(curElem.id === id + color){
                        let newAmount = curElem.amount + amount;
                        if(newAmount >= curElem.max){
                            newAmount =curElem.max
                        }
                        return {
                            ...curElem,
                            amount: newAmount,
                            }
                        }else {
                            return curElem;
                        }
                    });
                    return {
                        ...state,
                        cart: updatedProduct,
        
                        } 
            }else {
                let cartPorduct = {
                    id: id + color,
                    name: product.name,
                    color,
                    amount,
                    image: product.image[0].url,
                    price: product.price,
                    max: product.stock,

                }
                return {
                ...state,
                cart: [...state.cart, cartPorduct]

                } 
            };

            // to set increase and decrease 
        case "ITEM_DECREASE": {
            let updatedProduct = state.cart.map((curElem) => {
                if(curElem.id === action.payload){
                    let decAmount = curElem.amount -1;

                    if(decAmount <= 1){
                        decAmount = 1;
                    }
                    return {
                        ...curElem,
                        amount:decAmount
                    };
                }else {
                    return curElem;
                }
            });
            return {
                ...state,
                cart: updatedProduct,
            };
        }
        case "ITEM_INCREASE": {
            let updatedProduct = state.cart.map((curElem) => {
                if(curElem.id === action.payload){
                    let decAmount = curElem.amount + 1;

                    if(decAmount >= curElem.max){
                        decAmount = curElem.max;
                    }
                    return {
                        ...curElem,
                        amount:decAmount
                    };
                }else {
                    return curElem;
                }
            });
            return {
                ...state,
                cart: updatedProduct,
            }
        }
        case "REMOVE_CART_ITEM":
            let updatedCart = state.cart.filter((cartItem) => {
                return cartItem.id !== action.payload;
            });
            return {
                ...state,
                cart: updatedCart
            }
        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            }

        // case "CART_TOTAL_ITEM": {
        //     let updatedItemVal = state.cart.reduce((initealVal, curElem) => {
        //         let {amount} = curElem;

        //         initealVal = initealVal +amount;
        //         return initealVal;
        //     }, 0);
        //         return { 
        //             ...state,
        //             total_item: updatedItemVal,
        //         }
        //     }
            
        // case "CART_TOTAL_PRICE": {
        //     let updatedTotalVal = state.cart.reduce((initealVal, curElem) => {
        //         let {amount, price} = curElem;

        //         initealVal = initealVal + price*amount;
        //         return initealVal;
        //     }, 0);
        //         return { 
        //             ...state,
        //             total_price: updatedTotalVal,
                    
        //         }
        //     }
        
        case "CART_ITEM_PRICE_TOTAL": {
            let {total_price, total_item} = state.cart.reduce((accum, curElem) => {
                let {amount, price} = curElem;

                accum.total_item += amount;
                accum.total_price += amount*price;
                return accum;
            }, {total_item: 0,
                total_price: 0
            });

                return { 
                    ...state,
                    total_price, 
                    total_item,
                    
                }
            }
        

        default:
            return state;
    }
};

export default cartReducer;
