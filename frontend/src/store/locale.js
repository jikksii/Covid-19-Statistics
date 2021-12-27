import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    activeLocaleKey : "",
    activeLocaleObject : null,
    allLocales : null
}
const slice = createSlice({
    name : 'locale',
    initialState,
    reducers :{
        setActiveLocale(state,action){
            state.activeLocaleKey = action.payload
            state.activeLocaleObject = state.all[action.payload]
        },
        setAll(state,action){
            state.all = action.payload
        }
    }
})

export const localeActions = slice.actions

export default slice.reducer