
// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from './slice/signUpSlice';
import loginReducer from './slice/signUpSlice';


const store = configureStore({
  reducer: {
   signup: signUpReducer,
   login: loginReducer
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
