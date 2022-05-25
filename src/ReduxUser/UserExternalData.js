import  axios from 'axios'

export const getAllUsers = async () => {

    debugger
    let result = await axios.get("https://jsonplaceholder.typicode.com/users")
    debugger
    return result.data;
} 