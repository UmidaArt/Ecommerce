import axios from "axios";

const apiUrl = 'https://62da58029eedb699636bc313.mockapi.io/prodacts'

export const getAllProducts = () => {
    return (dispatch) => {
        // axios.get(`${apiUrl}`)
            .then((res => {
                console.log(res.data)
                dispatch ({
                    type: 'GAT_ALL_PRODUCTS',
                    payload: res.data
                })
            }))
    }
}

export const addNewProduct = (id) => {
    return (dispatch, getState) => {
        // axios.post(`${apiUrl}`,{id})
            .then(res => {
                console.log(res.data)
                dispatch ({
                    type: 'ADD_TO_CART',
                    payload:[...getState().cart, id]
                })
            })
    }

}