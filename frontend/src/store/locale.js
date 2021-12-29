import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    activeLocaleKey : "en",
    activeLiterals : null,
    allLocales : null
}
const slice = createSlice({
    name : 'locale',
    initialState,
    reducers :{
        setActiveLocale(state,action){
            state.activeLocaleKey = action.payload
        },
        setActiveLiterals(state,action){
            state.allLocales.forEach(element => {
                if(element.code === action.payload){
                    state.activeLiterals = element.literals
                    return;
                }
            });
        },
        setAll(state,action){
            state.allLocales = action.payload
        }
    }
})

export const localeActions = slice.actions

export default slice.reducer