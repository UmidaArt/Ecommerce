import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

const initialState = {
    products: [],
    cart: []
}

const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GAT_ALL_PRODUCTS':
            return {...state, products: action.payload}
        case 'ADD_PRODUCTS':
            return {...state, products: action.payload}
        case 'DELETE_PRODUCTS':
            return {...state, products: action.payload}
        case 'ADD_TO_CART':
            return {...state, cart: action.payload}
        default:
            return state
    }
}


export const store = createStore(storeReducer, composeWithDevTools(
    applyMiddleware(thunk)
))