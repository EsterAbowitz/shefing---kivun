import { useEffect, useState } from "react"
import { getAllPosts } from '../ReduxPost/PostExternalData'
export const PostsList = (props) => {

    //define object that will save the posts
    const [dataPost, setdataPost] = useState({});

    const addPost = (e) => {
        //setdataPost(dataPost.push(text))
        let newPost ={
            id:dataPost[dataPost.length -1 ].id+1,
            userId:props.id,
            body:e.target['body'],
            title:e.target['title']
        }
        dataPost.push(newPost)
    }

    let data = []
    useEffect(() => {
        async function fetchData() {

            data = await getAllPosts()
            setdataPost(data)
        }
        fetchData();
    }, []);
    return <>
    {/* a form to add post */}
        <form onSubmit={(e)=>{addPost(e)}}>
            <input type ="text" placeholder="insert title" id="title"></input>
            <textarea type="text" placeholder="insert post" id="body"></textarea>
            <input type="submit"></input>
        </form>
        {
            data != undefined &&
            data.length > 0 &&
            data.map((item) =>
                <>
                    {
                        // in case that the props id equals id item
                        item.userId == props.id &&
                        <>
                            <p>{item.name}</p>
                            <p>{item.company.name}</p>
                            <p>{item.email}</p>
                        </>
                    }
                </>
            )
        }
    </>

}