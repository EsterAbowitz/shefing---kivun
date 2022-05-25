import produce from "immer"

//initial an empty array to save the user list 
const UserIntialState ={
    users: [],
}
//create a Reducer object 
//that receiving the data as a parameter
export const UserReducer = produce((state,action) => {
        switch (action.type) {
            case "GET_ALL_USERS":{
                debugger
                 state.users = action.payload;
                 debugger
               // console.log(users);
            }
               
                break;
        
            default:
                break;
        }
    }, UserIntialState)