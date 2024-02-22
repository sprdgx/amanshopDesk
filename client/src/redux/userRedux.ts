import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  currentUser: any; 
  isFetching: boolean;
  error: boolean;
}

const initialState: UserState = {
  currentUser: null,
  isFetching: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    registerSuccess: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, registerSuccess } = userSlice.actions;
export default userSlice.reducer;
