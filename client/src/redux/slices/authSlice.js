import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: !!localStorage.getItem("access_token"),
  userRole: localStorage.getItem("userRole"),
  accessToken: localStorage.getItem("access_token"),
  };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.userRole = action.payload.role;
      state.accessToken = action.payload.token;

      localStorage.setItem("access_token", action.payload.token);
      localStorage.setItem("userRole", action.payload.role);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userRole = null;
      state.accessToken = null;

      localStorage.removeItem("access_token");
      localStorage.removeItem("userRole");
    },
  },
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;