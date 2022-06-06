import { createSlice } from "@reduxjs/toolkit";

export const stroiSlice = createSlice({
    name: "stroi",
    initialState: {
        products: [],
        navigation: []
    },
    reducers: {
        setStroi(state, action) {
            state.products = action.payload

        },

        setNavigation(state, action) {

            state.navigation.push(action.payload)
        },

        setNavigationHome(state, action) {
            state.navigation = action.payload
        }
    }
});

// Action creators are generated for each case reducer function
export const { setStroi, setNavigation, setNavigationHome } = stroiSlice.actions;

export const stroiReducer = stroiSlice.reducer;