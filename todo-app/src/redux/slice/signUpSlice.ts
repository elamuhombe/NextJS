//src/redux/slice/signUpSlice.ts
import { signUpState, User } from "@/types/userTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: signUpState = {
  user: null,
  isLoading: false,
  error: null,
};

const signUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    //Actions
    signUpRequest: (state) => {
      state.isLoading = true; // set loading to true when sign request is started
      state.error = null; // clear any errors
    },
    signUpSuccess: (state, action: PayloadAction<signUpState>) => {
      state.isLoading = false;
      state.user = action.payload.user; //set user data after successful login
      state.error = null; // clear any error after success
    },
    signUpFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
// export actions
export const { signUpRequest, signUpSuccess, signUpFailure } =
  signUpSlice.actions;

//export reducer
export default signUpSlice.reducer;
