import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import postSlice from "./slices/postSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    posts : postSlice,
  },
});
export default store;