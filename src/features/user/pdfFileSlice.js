// pdfSlice.js
import { createSlice } from '@reduxjs/toolkit';

const pdfSlice = createSlice({
  name: 'pdf',
  initialState: {
    pdfUrl: null,
  },
  reducers: {
    setPdfUrl: (state, action) => {
      state.pdfUrl = action.payload;
    },
    clearPdfUrl: (state) => {
      state.pdfUrl = null;
    },
  },
});

export const { setPdfUrl, clearPdfUrl } = pdfSlice.actions;
export default pdfSlice.reducer;
