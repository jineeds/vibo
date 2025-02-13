import { configureStore } from '@reduxjs/toolkit';
// import aboutR from './modules/aboutSlice';
// import contentR from './modules/contentSlice';
// import memberR from './modules/memberSlice';
import playerR from './modules/playerSlice';
import movieR from './modules/movieSlice';
import tvSeriesR from './modules/tvSeriesSlice';
// import pagenationR from './modules/pagenationSlice';
import contPlayerR from './modules/contPlayerSlice';

export const store = configureStore({
    reducer: {
        // aboutR,
        // contentR,
        // memberR,
        playerR,
        movieR,
        tvSeriesR,
        contPlayerR,
        // pagenationR,
    },
});
