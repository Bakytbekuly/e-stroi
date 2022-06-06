import { configureStore } from "@reduxjs/toolkit";
import { stroiReducer } from "./slice/stroi"




const store = configureStore({
    reducer: {
        stroi: stroiReducer,

    }
});



export default store;
