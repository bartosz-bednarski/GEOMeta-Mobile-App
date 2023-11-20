import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  loggedIn: false,
  accessToken: "",
  email: "",
  iconBackgroundColor: "",
  username: "",
  usernameShort: "",
};
const authStatusSlice = createSlice({
  name: "AuthStatus",
  initialState: authInitialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.accessToken = action.payload.accessToken;
      state.email = action.payload.email;
      state.iconBackgroundColor = action.payload.iconBackgroundColor;
      state.username = action.payload.username;
      state.usernameShort = action.payload.usernameShort;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.accessToken = "";
      state.email = "";
      state.iconBackgroundColor = "";
      state.username = "";
      state.usernameShort = "";
    },
  },
});

export const login = authStatusSlice.actions.login;
export const logout = authStatusSlice.actions.logout;
export default authStatusSlice.reducer;
