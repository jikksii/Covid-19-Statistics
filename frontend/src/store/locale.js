import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    active : null,
    all : null
}
const slice = createSlice({
    name : 'locale',
    initialState,
    reducers :{
        setActive(state,action){
            state.active = state.all[action.payload]
        },
        setAll(state,action){
            state.all = action.payload
        }
    }
})

export const localeActions = slice.actions

export default slice.reducer