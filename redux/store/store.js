import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "../cartSlice"
import favourite from "../favourite"
import productSlice from "../productSlice"
import userSlice from "../userSlice"



const store = configureStore({
    reducer:{
        user:userSlice,
        products:productSlice,
        cart:cartSlice,
        fav:favourite
    }
})

export default store