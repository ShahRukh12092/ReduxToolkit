import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name:'cartSlice',
    initialState:{
        items:[],
        totalQuantity:0
    },
    reducers:{
        addItemToCart(state,action){
            const newItem =action.payload
            const checkExistingItem = state.items.find((item)=> item.id === newItem.id)
            state.totalQuantity++
            if(checkExistingItem){ 
                checkExistingItem.quantity++
                checkExistingItem.totalPrice=checkExistingItem.totalPrice + newItem.price
                }
            else{
            state.items.push({
                id:newItem.id,
                name:newItem.title,
                price:newItem.price,
                totalPrice:newItem.price,
                quantity:1,
            })}

         },
        removeItemFromCart(state,action){
            const id =action.payload
            const checkExistingItem = state.items.find((item)=> item.id === id)
            if(checkExistingItem.quantity ===1){ 
                checkExistingItem.items= state.items.filter((item)=> item.id !== id)
            }
            else{
                checkExistingItem.quantity--
                checkExistingItem.totalPrice=checkExistingItem.totalPrice - checkExistingItem.price

             }
             state.totalQuantity--

           
         }
    }

})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;