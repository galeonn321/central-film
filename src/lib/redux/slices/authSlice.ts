import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types/interfaces";

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuthStatus(
      state,
      action: PayloadAction<{ isAuthenticated: boolean; user: User | null }>
    ) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },
  },
});

export const { setAuthStatus } = authSlice.actions;

export default authSlice.reducer;
