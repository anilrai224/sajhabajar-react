import { createSlice } from "@reduxjs/toolkit";

export const LoginStatusSlice = createSlice({
    name:'loginStatus',
    initialState:false,
    reducers:{
        setLoginStatus(state,action){
            return action.payload
        }
    }
})
export const {setLoginStatus} = LoginStatusSlice.actions
export default LoginStatusSlice.reducer