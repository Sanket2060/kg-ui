// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/user/authSlice.js';
import pdfReducer from '../features/user/pdfFileSlice.js';
const store = configureStore({
  reducer: {
    auth: authReducer,
    pdf: pdfReducer
  },
});

export  {store};