import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const fetchUser = createAsyncThunk('users/fetchUser' , async()=>{
    try{
        const response = await axios.get('https://dummyjson.com/users');
        const data =  response.data;
        console.log(data);
        return data ;
    }catch(error){
        throw new Error("Failed to fetch Users  :",error.message);
    }
    

});
    



const usersSlice =  createSlice({
    name:"users",
    initialState : {
        users:null,
        loading:false,
        error:null,
    },
    reducers:{
        
    },
    extraReducers:(builder)=>{
      builder.addCase(fetchUser.pending , (state )=>{

        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled , (state , action)=>{
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUser.rejected , (state , action)=>{
        state.loading = false;
        state.error = action.error.message;
      })
    }
})  

export default usersSlice.reducer;
export {fetchUser};