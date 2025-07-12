import { createSlice } from '@reduxjs/toolkit';

const getInitialWatchList = () => {
  const items = localStorage.getItem('watchList');
  return items ? JSON.parse(items) : [];
};

const watchListSlice = createSlice({
  name: 'watchList',
  initialState: {
    watchList: getInitialWatchList(),
  },
  reducers: {
    addMovie: (state, action) => {
      state.watchList.push(action.payload);
      localStorage.setItem('watchList', JSON.stringify(state.watchList));
    },
    removeMovie: (state, action) => {
      state.watchList = state.watchList.filter(movie => movie.id !== action.payload);
      localStorage.setItem('watchList', JSON.stringify(state.watchList));
    },
    setWatchList: (state, action) => {
      state.watchList = action.payload;
      localStorage.setItem('watchList', JSON.stringify(state.watchList));
    },
  },
});

export const { addMovie, removeMovie, setWatchList } = watchListSlice.actions;
export default watchListSlice.reducer; 