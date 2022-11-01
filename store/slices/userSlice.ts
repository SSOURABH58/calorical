import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  [key: string]: any;
}

const initialState: InitialState | null = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<any>) => ({
      ...action.payload,
    }),
    setUserLogoutState: (state, action) => ({}),
  },
});

export const { setActiveUser, setUserLogoutState } = userSlice.actions;

// export const selectUser = state:Redux.state => state.user

export default userSlice.reducer;
