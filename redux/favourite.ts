import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"



const initialState={
favourite:[],
error:false
}

const favouriteSlice = createSlice({
    name:"favourite",
    initialState,
    reducers:{
        favAdd:(state,action)=>{

            state.favourite.push(action.payload)
            console.log(state.favourite)


},


favRemove:(state,action)=>{
  const items = state.favourite.filter((e)=>e._id !== action.payload._id)
state.favourite = items
},

     
}})

export const {favAdd,favRemove,} = favouriteSlice.actions

export default favouriteSlice.reducer