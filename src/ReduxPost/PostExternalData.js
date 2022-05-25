import  axios from 'axios'

export const getAllPosts = async () => {

    debugger
    let result = await axios.get("https://jsonplaceholder.typicode.com/posts")
    debugger
    return result.data;
} 
