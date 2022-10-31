import { createSlice } from "@reduxjs/toolkit";
import { setStatus } from "./dataSlice";

// for freeezing object so no bodyy can change the status of api

const STATUS = Object.freeze({
    LOADING: "loading",
    IDLE: "idle",
    ERROR: "error"
})

const trySlice = createSlice({
    name: "try",
    initialState: {
        Status: STATUS.IDLE,
        data: []
    },
    reducers: {
        addData: (state, action) => {
         state.data=action.payload
        },
        setStatu:(state,action)=>{
            state.Status=action.payload
        },
        addWithId: (state, action) => {

        }
    }
})

export const {addData,addWithId,setStatu}=trySlice.actions;
export default trySlice.reducer;

// thunk

export const fetchTryData=(data2)=>{
    return async function getdata(dispatch,getState) {
        dispatch(setStatu(STATUS.LOADING))
        console.log(getState())
        console.log("hello",JSON.stringify(data2))
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data2)
        };
      try {
        const res=await fetch("https://reqres.in/api/register",requestOptions);
        const data1=await res.json()
        console.log(data1)
        dispatch(addData(data1))
        dispatch(setStatu(STATUS.IDLE))        
      } catch (error) {
       console.log(error,"error") 
       dispatch(setStatu(STATUS.ERROR))
      }
      dispatch(setStatu(STATUS.IDLE))
    }
}