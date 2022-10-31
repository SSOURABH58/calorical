import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  userEmail: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
    },
    setUserLogoutState: (state, action) => {
      (state.userName = null), (state.userEmail = null);
    },
  },
});

export const { setActiveUser, setUserLogoutState } = userSlice.actions;

// export const selectUser = state:Redux.state => state.user

export default userSlice.reducer;
