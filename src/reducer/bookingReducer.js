import { createSlice } from "@reduxjs/toolkit";

const bookingSlice=createSlice({
    name:"bookingSlice",
    initialState:{},
    reducers:{
        addBooking:(state,action)=>{
            return action.payload;
        }
    }
})
export default bookingSlice.reducer;
export const {addBooking}=bookingSlice.actions;