import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./Features/Blogs/BlogSlice";
import blogReducer from "./Features/SingleBlog/BlogSlice";
import FilterSlice from "./Features/Filter/FilterSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    filter : FilterSlice
  },
});
