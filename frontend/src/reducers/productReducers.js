import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL
} from '../constants/productConstants';

export const productListReducer = (state ={products:[]}, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading:true, products:[] }

        case PRODUCT_LIST_SUCCESS:
            return {loading:false, products: action.payload }
        
        case PRODUCT_LIST_FAIL:
            return {loading:false, error:action.payload }
        
        default:
            return state


    }
}



// function that takes current state and action of what we want to do to the state e.g 
// load data or error when we load data - change and manipulate state to return new copy in store and update store
