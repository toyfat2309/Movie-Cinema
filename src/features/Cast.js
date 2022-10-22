import { createSlice } from "@reduxjs/toolkit";
import { castList } from "../components/CastArray";

export const castSlice = createSlice({
    name : 'cast',
    initialState : {value : castList},
    reducers : {
        cast : (state,value)=>{
            
        }
    }
})

export const {navSub} = castSlice.actions;
export default castSlice.reducer