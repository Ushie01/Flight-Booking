import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { airportApi } from './api/airportApi';

const store = configureStore({
    reducer: {
        [airportApi.reducerPath]: airportApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(airportApi.middleware)
}); 

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export { useGetAirportsQuery } from './api/airportApi';
export default store;