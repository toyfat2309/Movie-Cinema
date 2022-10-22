import {createSlice} from '@reduxjs/toolkit'
import { movieList } from '../components/MoviesArray'


export const movieSlice = createSlice({
    name : "movies",
    initialState : { value : movieList },
    reducers :{
        movie : (state,value) =>{
            
        },
    }
})

export default movieSlice.reducer;