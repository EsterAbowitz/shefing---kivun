import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { GetAllUsers } from '../ReduxUser/userActions'
import { getAllUsers } from '../ReduxUser/UserExternalData'
import { PostsList } from './PostsList'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export const HomePage = () => {

    //getting the userList from the store
    let usersList = useSelector((store) => {
        return store.user.users

    })
    //create a dispatch object that will pass the data
    let dis = useDispatch()
    let data = [];
    //a function that will be activated when logging in
    useEffect(() => {
        async function fetchData() {
            //Receive the data from the external file
            data = await getAllUsers()
            dis(GetAllUsers(data))
        }
        fetchData();
    }, []);
    //view more detailes
    const [flagPost, setFlagPost] = useState(false);
    //Define the specific id object for which you want to see more data 
    const [curUserId, setCurUserId] = useState();
    //define an object that will allow the data to be filtered in the view 
    const [showEmail, setShowEmail] = useState("");
    const [showName, setShowName] = useState("");


    return <>
        <input type="text" placeholder="🔍searchByEmail..." onChange={(e) => setShowEmail(e.target.value)} className="input" />
        <input type="text" placeholder="🔍searchByName..." onChange={(e) => setShowName(e.target.value)} className="input" />
        <MDBTable borderless>
            <MDBTableHead>
                <th>name</th>
                <th>email</th>
                <th>company</th>
            </MDBTableHead>
            {
                usersList != undefined &&
                usersList.length > 0 &&
                usersList.map(item =>
                    <>
                        {
                            item.email.indexOf(showEmail) != -1 &&
                            item.name.indexOf(showName) != -1 &&
                            <>
                                <MDBTableBody>
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.company.name}</td>
                                       <td><input type ="button"onClick={() => { setCurUserId(item.id); setFlagPost(true) }}></input></td> 
                                    </tr>
                                </MDBTableBody>
                            </>
                        }
                    </>
                )
            }
        </MDBTable>       
         {
             //send the id to PostsList component
            flagPost &&
            <PostsList id={curUserId} setFlag={setFlagPost}></PostsList>
        }
    </>
}
