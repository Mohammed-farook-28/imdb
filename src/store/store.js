import  {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import themeReducer from "./themeSlice";
import watchListReducer from "./watchListSlice";
import moviesReducer from "./moviesSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        theme: themeReducer,
        watchList: watchListReducer,
        movies: moviesReducer,
    },
});

export default store;