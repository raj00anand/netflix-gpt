import { createSlice } from "@reduxjs/toolkit";

const configslice = createSlice({
    name: 'config',
    initialState: {
        lang: "en",
        showSearch: false,
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        },
        changeShowSearch: (state) => {
            state.showSearch = !state.showSearch;
        }
    }
});
export const {changeLanguage, changeShowSearch} = configslice.actions;
export default configslice.reducer;