import axios from "axios"
import TYPES from "../Types"

export const getData = (param) => (dispatch) => {
    axios
    .get("https://reqres.in/api/users?page=2")
    .then((res) => {
        dispatch({
            type: TYPES.FETCH_DATA,
            payload: res.data.data
        })
    })
    .catch((err) => {
        console.log(err)
    })
}