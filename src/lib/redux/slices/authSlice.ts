import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  userToken: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  userToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuthStatus(
      state,
      action: PayloadAction<{ isAuthenticated: boolean; userToken: string | null }>
    ) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.userToken = action.payload.userToken;
    },
  },
});

export const { setAuthStatus } = authSlice.actions;

export default authSlice.reducer;
