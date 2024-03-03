import { createSlice } from "@reduxjs/toolkit";

const initialvalue = {
  isLoading: true,
  user: {},
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialvalue,
  reducers: {
    setUser: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.access_token;
    },
    logout: (state) => {
      state.isLoading = false;
      state.user = {};
      state.token = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
