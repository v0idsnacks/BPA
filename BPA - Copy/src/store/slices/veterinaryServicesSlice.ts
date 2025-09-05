import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VeterinaryService } from '../../types';

interface VeterinaryServicesState {
    veterinaryServices: VeterinaryService[];
    isLoading: boolean;
    error: string | null;
}

const initialState: VeterinaryServicesState = {
    veterinaryServices: [],
    isLoading: false,
    error: null,
};

const veterinaryServicesSlice = createSlice({
    name: 'veterinaryServices',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        setVeterinaryServices: (state, action: PayloadAction<VeterinaryService[]>) => {
            state.veterinaryServices = action.payload;
        },
        addVeterinaryService: (state, action: PayloadAction<VeterinaryService>) => {
            state.veterinaryServices.push(action.payload);
        },
        updateVeterinaryService: (state, action: PayloadAction<VeterinaryService>) => {
            const index = state.veterinaryServices.findIndex(service => service.id === action.payload.id);
            if (index !== -1) {
                state.veterinaryServices[index] = action.payload;
            }
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    setLoading,
    setError,
    setVeterinaryServices,
    addVeterinaryService,
    updateVeterinaryService,
    clearError,
} = veterinaryServicesSlice.actions;

export default veterinaryServicesSlice.reducer;
