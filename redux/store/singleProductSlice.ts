import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDetails = createAsyncThunk("detailsFetch",async(id)=>{
    const res = await axios.get(`https://silly-blue-brown-bear.cyclic.app/api/products/find/${id}`)
    return res.data
})


const productDetailsSlice = createSlice({
    name:"details",
    initialState:{
        product:[],
    loading:false
    },
    extraReducers:(builder)=>{

        builder.addCase(fetchDetails.pending,(state,action)=>{
state.product = [];
state.loading = true
        })
        builder.addCase(fetchDetails.fulfilled,(state,action)=>{

            state.product = action.payload
            state.loading = false
            })

            builder.addCase(fetchDetails.rejected,(state)=>{

                state.product = []
                state.loading = false
})

    }
})

export default productDetailsSlice.reducer