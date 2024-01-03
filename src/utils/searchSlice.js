import { createSlice } from "@reduxjs/toolkit";

const searchSlice =  createSlice({
    name: 'search',
    initialState: {
        searchMovies: null,
    },
    reducers: {
        addSearchMovies: (state, action) => {
            state.searchMovies = action.payload;
        }
    }
})

export const {addSearchMovies} = searchSlice.actions;
export default searchSlice.reducer;