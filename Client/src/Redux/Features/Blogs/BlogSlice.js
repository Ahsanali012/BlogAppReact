import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getblogs } from "./BlogApi";

//initial state
const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchBLogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const blogs = await getblogs();
  return blogs;
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBLogs.pending, (state) => {
      state.isError = false, 
      state.isLoading = true,
      state.blogs = []
    })
    .addCase(fetchBLogs.fulfilled,(state,action)=>{
        state.isLoading = false,
        state.blogs = action.payload
    })
    .addCase(fetchBLogs.rejected ,(state,action)=>{
        state.isLoading = false,
        state.blogs = [],
        state.isError = true,
        state.error = action.error?.message
    })
  },
})

export default blogsSlice.reducer;
