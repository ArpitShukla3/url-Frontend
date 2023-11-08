import Reducer from "./Slice/CreateSlice"
import { configureStore } from "@reduxjs/toolkit"
const store=configureStore({
    reducer:{
        profileReducer:Reducer
    },
    devTools:process.env.NODE_ENV!='production'
})

export default store;   