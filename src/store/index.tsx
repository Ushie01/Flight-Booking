import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { airportApi } from './api/airportApi';
import { flightApi } from './api/flightsApi';
// import {flight}

const store = configureStore({
    reducer: {
        [airportApi.reducerPath]: airportApi.reducer,
        [flightApi.reducerPath]: flightApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(airportApi.middleware)
            .concat(flightApi.middleware)
}); 

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export { useGetAirportsQuery } from './api/airportApi';
export default store;