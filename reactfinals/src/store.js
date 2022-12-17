import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./assets/reducers/itemsSlice";



const store = configureStore({
    reducer:{itemsSlice:itemsSlice}})

export default store;