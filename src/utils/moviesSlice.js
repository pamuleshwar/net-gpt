import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        trailerVideo : null,
        nowPlayingMovies : null,
        trendingMovies : null,
        popularMovies : null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrendingMovies : (state, action) => {
            state.trendingMovies = action.payload;
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addTrailerVideo, addTrendingMovies, addPopularMovies} = moviesSlice.actions;

export default moviesSlice.reducer;