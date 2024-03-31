import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:'moviesSlice',
    initialState:{},
    reducers:{
        addSelectedMovie:(state,action)=>{
            return action.payload;
        }
    }

})

export default moviesSlice.reducer;
export const {addSelectedMovie}=moviesSlice.actions;
