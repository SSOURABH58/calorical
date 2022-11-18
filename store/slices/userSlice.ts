import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userProfile: any = {
  name: {
    title: "Name",
    from: {
      value: "name IRL ??.",
    },
    inputLength: 15,
  },
  calories: {
    title: "Calories",
    from: {
      value: 2500,
    },
    to: {
      value: 3000,
    },
    inputLength: 5,
  },
  protein: {
    title: "Protein",
    from: {
      value: 25,
    },
    to: {
      value: 30,
    },
    unit: "g",
    inputLength: 4,
  },
  carbohydrates: {
    title: "Carbohydrates",
    from: {
      value: 200,
    },
    to: {
      value: 230,
    },
    unit: "g",
    inputLength: 4,
  },
  fats: {
    title: "Fats",
    from: {
      value: 15,
    },
    to: {
      value: 20,
    },
    unit: "g",
    inputLength: 4,
  },
};

interface InitialState {
  [key: string]: any;
}

const initialState: InitialState | null = {
  profile: userProfile,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<any>) => ({
      ...state,
      auth: action.payload,
    }),
    setUserProfile: (state, action: PayloadAction<any>) => ({
      ...state,
      profile: action.payload,
    }),
    setUserLogoutState: (state, action) => ({}),
  },
});

export const { setActiveUser, setUserLogoutState, setUserProfile } =
  userSlice.actions;

// export const selectUser = state:Redux.state => state.user.auth

export default userSlice.reducer;
