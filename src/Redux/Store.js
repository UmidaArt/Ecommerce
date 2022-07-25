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
        case 'ADD_TO_CART':
            return {...state, cart: action.payload}
        console.log(state)
        case 'DELETE_PRODUCT':
            return {...state, cart: action.payload}
        default:
            return state
    }
}


export const store = createStore(storeReducer, composeWithDevTools(
    applyMiddleware(thunk)
))
    // [
    // {
    //     "createdAt": "2022-07-21T14:12:25.474Z",
    //     "image": "https://i.ibb.co/jZFVhct/Image.png",
    //     "title": "title 1",
    //     "price": 69,
    //     "description": "description 1",
    //     "discount": 82,
    //     "category": "category 1",
    //     "rating": 89,
    //     "id": "1"
    // },
    //     {
    //         "createdAt": "2022-07-21T22:45:40.119Z",
    //         "image": "https://i.ibb.co/DGSHcf1/Image.png",
    //         "title": "title 2",
    //         "price": 70,
    //         "description": "description 2",
    //         "discount": 77,
    //         "category": "category 2",
    //         "rating": 46,
    //         "id": "2"
    //     },
    //     {
    //         "createdAt": "2022-07-21T15:28:19.607Z",
    //         "image": "https://i.ibb.co/hMHHhrx/Image.png",
    //         "title": "title 3",
    //         "price": 95,
    //         "description": "description 3",
    //         "discount": 80,
    //         "category": "category 3",
    //         "rating": 58,
    //         "id": "3"
    //     },
    //     {
    //         "createdAt": "2022-07-21T14:12:25.474Z",
    //         "image": "https://i.ibb.co/xM8jf63/Image.png",
    //         "title": "title 1",
    //         "price": 69,
    //         "description": "description 1",
    //         "discount": 82,
    //         "category": "category 1",
    //         "rating": 89,
    //         "id": "1"
    //     },
    //     {
    //         "createdAt": "2022-07-21T14:12:25.474Z",
    //         "image": "https://i.ibb.co/PFxssvY/Image.png",
    //         "title": "title 1",
    //         "price": 69,
    //         "description": "description 1",
    //         "discount": 82,
    //         "category": "category 1",
    //         "rating": 89,
    //         "id": "1"
    //     },
    //     {
    //         "createdAt": "2022-07-21T22:45:40.119Z",
    //         "image": "https://i.ibb.co/NF5vmdW/Image.png",
    //         "title": "title 2",
    //         "price": 70,
    //         "description": "description 2",
    //         "discount": 77,
    //         "category": "category 2",
    //         "rating": 46,
    //         "id": "2"
    //     },
    //     {
    //         "createdAt": "2022-07-21T15:28:19.607Z",
    //         "image": "https://i.ibb.co/njsxzjR/Image.png",
    //         "title": "title 3",
    //         "price": 95,
    //         "description": "description 3",
    //         "discount": 80,
    //         "category": "category 3",
    //         "rating": 58,
    //         "id": "3"
    //     },
    //     {
    //         "createdAt": "2022-07-21T22:45:40.119Z",
    //         "image": "https://i.ibb.co/z7ByDDb/Image.png",
    //         "title": "title 2",
    //         "price": 70,
    //         "description": "description 2",
    //         "discount": 77,
    //         "category": "category 2",
    //         "rating": 46,
    //         "id": "2"
    //     },
    //     {
    //         "createdAt": "2022-07-21T15:28:19.607Z",
    //         "image": "https://i.ibb.co/dPqSFHH/Image.png",
    //         "title": "title 3",
    //         "price": 95,
    //         "description": "description 3",
    //         "discount": 80,
    //         "category": "category 3",
    //         "rating": 58,
    //         "id": "3"
    //     },
    //     {
    //         "createdAt": "2022-07-22T02:49:21.842Z",
    //         "image": "https://i.ibb.co/D58W3LN/Image.png",
    //         "title": "title 4",
    //         "price": 23,
    //         "description": "description 4",
    //         "discount": 79,
    //         "category": "category 4",
    //         "rating": 20,
    //         "id": "4"
    //     },
    //     {
    //         "createdAt": "2022-07-22T08:15:30.462Z",
    //         "image": "https://i.ibb.co/Gkvtc9T/Image.png",
    //         "title": "title 5",
    //         "price": 44,
    //         "description": "description 5",
    //         "discount": 38,
    //         "category": "category 5",
    //         "rating": 13,
    //         "id": "5"
    //     },
    //     {
    //         "createdAt": "2022-07-22T04:44:17.376Z",
    //         "image": "https://i.ibb.co/y8S9Sns/Image.png",
    //         "title": "title 6",
    //         "price": 61,
    //         "description": "description 6",
    //         "discount": 73,
    //         "category": "category 6",
    //         "rating": 98,
    //         "id": "6"
    //     }
    // ]