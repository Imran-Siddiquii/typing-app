import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import trySlice from "./trySlice";
const store=configureStore({reducer:{
    apiData:dataSlice,
    try:trySlice
}})

export default store;