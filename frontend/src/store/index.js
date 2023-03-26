import { configureStore, createSlice } from "@reduxjs/toolkit";


export const mainSlice = createSlice({
   name:'main',
   initialState:{
            data:null
   },
   reducers:{
    increment:(state)=>{
    setData:(state,action)
    state.data =action.payload
        }
    }
})
export const {setData} =mainSlice.actions
export const store =configureStore({reducer:mainSlice.reducer})