import axios from "axios";

const apiUrl = 'https://62da58029eedb699636bc313.mockapi.io/prodacts'

export const getAllProducts = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}`)
            .then((res => {
                dispatch ({
                    type: 'GAT_ALL_PRODUCTS',
                    payload: res.data
                })
            }))
    }
}