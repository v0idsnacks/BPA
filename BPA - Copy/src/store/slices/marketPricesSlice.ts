import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MarketPrice } from '../../types';

interface MarketPricesState {
    marketPrices: MarketPrice[];
    isLoading: boolean;
    error: string | null;
}

const initialState: MarketPricesState = {
    marketPrices: [],
    isLoading: false,
    error: null,
};

const marketPricesSlice = createSlice({
    name: 'marketPrices',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        setMarketPrices: (state, action: PayloadAction<MarketPrice[]>) => {
            state.marketPrices = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    setLoading,
    setError,
    setMarketPrices,
    clearError,
} = marketPricesSlice.actions;

export default marketPricesSlice.reducer;
