//src/redux/slice/loginSlice.ts
import { User, userLoginState } from '@/types/userTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


// Initial state with correct types
const initialState: userLoginState = {
  user: null, // user starts as null (no user logged in)
  isLoggedIn: false, // Initially, user is not logged in
};


// Create a slice for user state
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload }; // Updating user data
      }
    },
  },
});

export const { setUser, logout, updateUser } = loginSlice.actions;
export default loginSlice.reducer;
