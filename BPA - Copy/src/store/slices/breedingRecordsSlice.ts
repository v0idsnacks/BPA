import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BreedingRecord } from '../../types';

interface BreedingRecordsState {
    breedingRecords: BreedingRecord[];
    isLoading: boolean;
    error: string | null;
}

const initialState: BreedingRecordsState = {
    breedingRecords: [],
    isLoading: false,
    error: null,
};

const breedingRecordsSlice = createSlice({
    name: 'breedingRecords',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        setBreedingRecords: (state, action: PayloadAction<BreedingRecord[]>) => {
            state.breedingRecords = action.payload;
        },
        addBreedingRecord: (state, action: PayloadAction<BreedingRecord>) => {
            state.breedingRecords.push(action.payload);
        },
        updateBreedingRecord: (state, action: PayloadAction<BreedingRecord>) => {
            const index = state.breedingRecords.findIndex(record => record.id === action.payload.id);
            if (index !== -1) {
                state.breedingRecords[index] = action.payload;
            }
        },
        deleteBreedingRecord: (state, action: PayloadAction<string>) => {
            state.breedingRecords = state.breedingRecords.filter(record => record.id !== action.payload);
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    setLoading,
    setError,
    setBreedingRecords,
    addBreedingRecord,
    updateBreedingRecord,
    deleteBreedingRecord,
    clearError,
} = breedingRecordsSlice.actions;

export default breedingRecordsSlice.reducer;
