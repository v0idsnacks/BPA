import { configureStore } from '@reduxjs/toolkit';
import animalsSlice from './slices/animalsSlice';
import healthRecordsSlice from './slices/healthRecordsSlice';
import breedingRecordsSlice from './slices/breedingRecordsSlice';
import veterinaryServicesSlice from './slices/veterinaryServicesSlice';
import marketPricesSlice from './slices/marketPricesSlice';
import governmentSchemesSlice from './slices/governmentSchemesSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
    reducer: {
        animals: animalsSlice,
        healthRecords: healthRecordsSlice,
        breedingRecords: breedingRecordsSlice,
        veterinaryServices: veterinaryServicesSlice,
        marketPrices: marketPricesSlice,
        governmentSchemes: governmentSchemesSlice,
        user: userSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
