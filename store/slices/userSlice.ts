import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  [key: string]: any;
}

const initialState: InitialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => ({
      ...action.payload,
    }),
    setUserLogoutState: (state, action) => {
      state = {};
    },
  },
});

export const { setActiveUser, setUserLogoutState } = userSlice.actions;

// export const selectUser = state:Redux.state => state.user

export default userSlice.reducer;
