import {configureStore} from '@reduxjs/toolkit'
import loginStatusSlice  from './LoginStatusSlice'

export const store = configureStore({
    reducer:{
        loginStatus: loginStatusSlice,
    }
})