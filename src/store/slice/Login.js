import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { intansce } from "../../axios";

export const Login = createAsyncThunk("Login", async (data, { rejectWithValue }) => {
    
   if (data.email && data.password) { 
                data = {...data,isLogin:true}
            }
    const result = await axios.post("/Authentication", data)

    try {
        console.log("getting response:",result)
        return result.data

    } catch (error) {
        return rejectWithValue(error)
    }
})

// export const getUser = createAsyncThunk("Adding User", async(data, {rejectWithValue})=>{
//     const response = await instance.post("/users",data)
//       try {
//         console.log(response)
//         return response.data
  
//       } catch (error) {
//         console.log(error)
//         return rejectWithValue(error.response)
//       }
//   })





const initialState = {
    email: "",
    password: "",
    isLogin: false
}
    

const UserLogin = createSlice({
    name: "user login",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder)=>{
        builder.addCase(Login.pending, ()=>{
            console.log("Loading...")
        })
        builder.addCase(Login.fulfilled, (state, {payload})=>{
            console.log("Fullfilled:", payload)
            const {email,password,id, isLogin} = payload
            state={...state,email,password,id,isLogin}
            return state
        })
        builder.addCase(Login.rejected, (state,{error})=>{
            console.log("Rejected: ",error)
        })
    }
    // {
    //     [login.pending]: () => {

    //         console.log("pending data")
    //     },
    //     [login.fulfilled]: (state, {payload}) => {
    //         // console.log(action)
    //         console.log("storing in state:", payload)
    //         // state.email = payload.email
    //         // state.password = payload.password
    //         // if (state.email && state.password) {
    //         //     state.isLogin = true
    //         // }
    //         const {email,password,id, isLogin} = payload
    //         state={...state,email,password,id,isLogin}
    //         return state
    //     },
    //     [login.rejected]: (state, action) => {
    //         console.log(action.payload)

    //     }

    // },

})

export default UserLogin.reducer;
// export const { login } = Slice.actions