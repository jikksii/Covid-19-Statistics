import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAuth : false,
    token : ""
}
const slice = createSlice({
    name : 'auth',
    initialState,
    reducers :{
        setAuth(state,action){
            state.isAuth = action.isAuth
        },
        setToken(state,action){
            state.token = action.token
        }
    }
})

export const authActions = slice.actions

export default slice.reducer