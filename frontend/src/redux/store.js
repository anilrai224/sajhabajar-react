import {configureStore} from '@reduxjs/toolkit'
import loginStatusSlice  from './LoginStatusSlice'
import userDetailSlice from './userDetailSlice'

export const store = configureStore({
    reducer:{
        loginStatus: loginStatusSlice,
        userDetail: userDetailSlice,
    }
})