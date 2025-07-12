import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    moviesData: [],
    isLoading: false,
    pageNumber: 1,
  },
  reducers: {
    setMoviesData: (state, action) => {
      state.moviesData = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    nextPage: (state) => {
      state.pageNumber += 1;
    },
    prevPage: (state) => {
      state.pageNumber = Math.max(1, state.pageNumber - 1);
    },
  },
});

export const { setMoviesData, setIsLoading, setPageNumber, nextPage, prevPage } = moviesSlice.actions;
export default moviesSlice.reducer; 