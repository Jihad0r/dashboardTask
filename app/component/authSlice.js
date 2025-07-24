

import { createSlice } from '@reduxjs/toolkit';
const isAuthenticatedFromStorage = typeof window !== "undefined" && localStorage.getItem("isAuthenticated") === "true";
const userFromStorage = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user")) : null;

const initialState = {
  isAuthenticated: isAuthenticatedFromStorage || false,
  user: userFromStorage,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
