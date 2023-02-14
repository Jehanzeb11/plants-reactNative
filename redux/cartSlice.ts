import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"



const initialState={
cart:[],
quantity:1,
error:false,
total:0
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add:(state,action)=>{

           state.cart.push(action.payload)
           state.total += action.payload.price
},


remove:(state,action)=>{
  const items = state.cart.filter((e)=>e._id !== action.payload._id)
state.cart = items

           state.total -= action.payload.price

},

undo:(state)=>{
state.cart = []
state.total = 0
},



      
}})

export const {add,remove,undo,decrease} = cartSlice.actions

export default cartSlice.reducer