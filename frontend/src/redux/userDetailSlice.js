import { createSlice } from "@reduxjs/toolkit";

export const userDetailSlice = createSlice({
    name:'userDetail',
    initialState:[{
        isAdmin:false,
        userDetails:{}
    }],
    reducers:{
        setUserDetail(_,action){
            return action.payload
        },
        setIsAdmin(state,action){
            state.isAdmin=action.payload
        }
        
    }
})

export const {setUserDetail,setIsAdmin} = userDetailSlice.actions
export default userDetailSlice.reducer