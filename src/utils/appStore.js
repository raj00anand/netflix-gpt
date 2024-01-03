import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviesReducer from './moviesSlice'
import GptReducer from './GptSlice'
import configReducer from './configSlice'
import searchSlice from "./searchSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: GptReducer,
        config:  configReducer,
        search: searchSlice,
    },
})

export default appStore;