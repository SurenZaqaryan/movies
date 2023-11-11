import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  Featured: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getMovies(state, action) {
      state.movies = action.payload.TendingNow;
      state.Featured = action.payload.Featured;
    },
    changeFeaturedMovie(state, action) {
      const movie = action.payload;
      state.Featured = movie;
    },
  },
});

export default moviesSlice.reducer;
export const { getMovies, changeFeaturedMovie } = moviesSlice.actions;
