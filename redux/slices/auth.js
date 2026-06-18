import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    initializing: true,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.initializing = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.initializing = false;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
