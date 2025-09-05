import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HealthRecord } from '../../types';

interface HealthRecordsState {
    healthRecords: HealthRecord[];
    isLoading: boolean;
    error: string | null;
}

const initialState: HealthRecordsState = {
    healthRecords: [],
    isLoading: false,
    error: null,
};

const healthRecordsSlice = createSlice({
    name: 'healthRecords',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        setHealthRecords: (state, action: PayloadAction<HealthRecord[]>) => {
            state.healthRecords = action.payload;
        },
        addHealthRecord: (state, action: PayloadAction<HealthRecord>) => {
            state.healthRecords.push(action.payload);
        },
        updateHealthRecord: (state, action: PayloadAction<HealthRecord>) => {
            const index = state.healthRecords.findIndex(record => record.id === action.payload.id);
            if (index !== -1) {
                state.healthRecords[index] = action.payload;
            }
        },
        deleteHealthRecord: (state, action: PayloadAction<string>) => {
            state.healthRecords = state.healthRecords.filter(record => record.id !== action.payload);
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    setLoading,
    setError,
    setHealthRecords,
    addHealthRecord,
    updateHealthRecord,
    deleteHealthRecord,
    clearError,
} = healthRecordsSlice.actions;

export default healthRecordsSlice.reducer;
