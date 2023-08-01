import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MyfetchMiddleWare from "../../axios/GlobalInstance";

export const Product = createAsyncThunk(
  "users/fetchByIdStatus", async (options)=>{
    let {method, url, config} = options

    console.log("method:",method, "url:",url, "options:",config)


    console.log("METHOD:",method )
    // return await MyfetchMiddleWare(url, options, method)
    // .then(res=>res).catch(error=>error)
    let res = await MyfetchMiddleWare(url, config,method)
    try{
      return {...res}
    }catch(error){
      return error
    }
    
  })
  
const initialState = {
  value: [],
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getUsers: (state,action) => {
      console.log("state:", state, "actions:", action)
    },
  },
  extraReducers: (builder)=>{

    builder.addCase(Product.pending, ()=>{
      console.log('loading')
    })
    builder.addCase(Product.fulfilled, (state, action)=>{
      console.log('fullfilled, Storing in state:', action)
      const {url} = action.meta.arg
      let key = url.split("").splice(1).join("")
      console.log(key)
      state = {...state, [key] : action.payload}
      return state
    })
    builder.addCase(Product.rejected, (state, {error})=>{
      alert(`Error fetching product details!: ${error.message}`)
      console.log("Rejected: ", error.message)
    })
  }
});

// Action creators are generated for each case reducer function
// export const { getUsers } = counterSlice.actions;

export default counterSlice.reducer;
