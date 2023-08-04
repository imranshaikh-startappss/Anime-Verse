import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const NewUser = createAsyncThunk("Adding new user", async()=>{
    
})

const AddUser = createSlice({
    name: "NewUser",
    initialState:{
        loading: false,
        users:[],
        error: null
    },
    extraReducers: (builder)=>{
        builder.addCase(NewUser.pending, (state)=>{
            console.log("Pending: Loading...")
            state.loading = true
        })
        builder.addCase(NewUser.fulfilled, (state,{payload})=>{
            console.log("Fullfilled: ", payload)
            state.loading = false
            state.users.push(payload)
        })
        builder.addCase(NewUser.rejected, (state, {error})=>{
            console.log("Rejected: ", error)
            state.loading = false
            state.error = error.message
        })
    }
})

export default AddUser.reducer