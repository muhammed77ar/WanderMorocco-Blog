import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../axios/axios";


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axiosClient.get('/api/posts');
  return response?.data?.posts;
});


const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
