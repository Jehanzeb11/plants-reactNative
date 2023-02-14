import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
products:[],
error:false,
loading:false,
}

export const getProducts = createAsyncThunk("get/products",async()=>{
    try {
       const res = await axios.get("https://silly-blue-brown-bear.cyclic.app/api/products")
console.log(res.data,"slices")
return res.data

} catch (error) {
        console.log(error)
    }
    
})



const productSlice = createSlice({
    name:"products",
    initialState,
    extraReducers:(builder)=>{
builder.addCase(getProducts.pending,(state)=>{
state.loading = true
})

builder.addCase(getProducts.fulfilled,(state,action)=>{
state.loading = false
state.products = action.payload
})

builder.addCase(getProducts.rejected,(state,action)=>{
state.loading = false
state.products = []
state.error=true
})

    }
})

export default productSlice.reducer