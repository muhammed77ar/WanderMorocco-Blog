import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: !!localStorage.getItem('accessToken'), // Initialize based on localStorage
    userRole: localStorage.getItem('userRole'),
    accessToken: localStorage.getItem('accessToken'),
  };

const authSlice = createSlice({
    name : "auth",
    initialState : initialState,
    reducers: {
        login(state, action) {
          state.isAuthenticated = true;
          state.userRole = action.payload.role;
          state.accessToken = action.payload.token;
    
          // Store in localStorage
          localStorage.setItem('accessToken', action.payload.token);
          localStorage.setItem('userRole', action.payload.role);
        },
        logout(state) {
          state.isAuthenticated = false;
          state.userRole = null;
          state.accessToken = null;
    
          // Clear from localStorage
          localStorage.removeItem('accessToken');
          localStorage.removeItem('userRole');
        },
      },
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;