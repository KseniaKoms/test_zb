import { configureStore } from '@reduxjs/toolkit';
import { feedbackApi } from './feedbackApi';

export const store = configureStore({
    reducer: {[feedbackApi.reducerPath]: feedbackApi.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(feedbackApi.middleware),
})