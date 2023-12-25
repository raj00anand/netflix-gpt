import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: 'GPT',
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null,
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieResults= movieResults;
            state.movieNames = movieNames;
        }
    }
});

export const {toggleGptSearchView, addGptMovieResult} = GptSlice.actions;
export default GptSlice.reducer