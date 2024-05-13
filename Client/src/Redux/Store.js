import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./Features/Blogs/BlogSlice";
import blogReducer from "./Features/SingleBlog/BlogSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    filter : 
  },
});
