import {createSlice } from "@reduxjs/toolkit";


const STATUSES=Object.freeze( {
    IDLE:"idle",
    ERROR:'error',
    LOADING:'loading'
})

const dataSlice=createSlice({
    name:"product",
    initialState:{
    data:[],
    status:STATUSES.IDLE
    },
    reducers:{
        setProduct(state,action){
            state.data=action.payload
        },
        setStatus(state,action){
            state.status=action.payload
        }

    }
})

export const {setProduct,setStatus}=dataSlice.actions;
export default dataSlice.reducer;

//thunk

export const fetchData=(num)=>{
    return async function getdata(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const res= await fetch("https://jsonplaceholder.typicode.com/user" + "/" +num)
            const data=await res.json()
            dispatch(setProduct(data))
            dispatch(setStatus(STATUSES.IDLE))
        } catch (error) {
            console.log("error")
            dispatch(setStatus(STATUSES.ERROR))
        }
        dispatch(setStatus(STATUSES.IDLE))
    }
}


