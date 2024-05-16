import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  username: "",
  profileImgUrl: "",
  name: "",
  email: "",
  phone: "",
  address: "",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      console.log("Authenticated");
      state.isAuthenticated = true;
      // state.username = action.payload.username;
      // state.profileImgUrl = action.payload.profileImgUrl;
      // state.name = action.payload.name;
      // state.email = action.payload.email;
      // state.phone = action.payload.phone;
      // state.address = action.payload.address;
    },
  },
});

export default AuthSlice.reducer;

export const { addUser } = AuthSlice.actions;
