import {createSlice} from '@reduxjs/toolkit'

const initialData={showCart:false}
const uiSlice=createSlice({
    name:'uiSlice',
    initialState:initialData,
    reducers:{
        toggle(state){
            state.showCart =!state.showCart
        }
    }

})

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;