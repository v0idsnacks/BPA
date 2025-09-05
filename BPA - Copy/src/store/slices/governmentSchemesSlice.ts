import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GovernmentScheme } from '../../types';

interface GovernmentSchemesState {
    governmentSchemes: GovernmentScheme[];
    isLoading: boolean;
    error: string | null;
}

const initialState: GovernmentSchemesState = {
    governmentSchemes: [],
    isLoading: false,
    error: null,
};

const governmentSchemesSlice = createSlice({
    name: 'governmentSchemes',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        setGovernmentSchemes: (state, action: PayloadAction<GovernmentScheme[]>) => {
            state.governmentSchemes = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    setLoading,
    setError,
    setGovernmentSchemes,
    clearError,
} = governmentSchemesSlice.actions;

export default governmentSchemesSlice.reducer;
