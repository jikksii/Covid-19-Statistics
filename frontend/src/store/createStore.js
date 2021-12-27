import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth'
import localeReducer from './locale'

const store =  configureStore({
    reducer :{
        auth : authReducer,
        locale : localeReducer
    }
})

export default store;