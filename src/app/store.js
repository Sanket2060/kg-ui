// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/user/authSlice.js';
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export  {store};