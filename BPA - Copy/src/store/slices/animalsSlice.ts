import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Animal } from '../../types';

interface AnimalsState {
    animals: Animal[];
    isLoading: boolean;
    error: string | null;
    selectedAnimal: Animal | null;
}

const initialState: AnimalsState = {
    animals: [],
    isLoading: false,
    error: null,
    selectedAnimal: null,
};

const animalsSlice = createSlice({
    name: 'animals',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        setAnimals: (state, action: PayloadAction<Animal[]>) => {
            state.animals = action.payload;
        },
        addAnimal: (state, action: PayloadAction<Animal>) => {
            state.animals.push(action.payload);
        },
        updateAnimal: (state, action: PayloadAction<Animal>) => {
            const index = state.animals.findIndex(animal => animal.id === action.payload.id);
            if (index !== -1) {
                state.animals[index] = action.payload;
            }
        },
        deleteAnimal: (state, action: PayloadAction<string>) => {
            state.animals = state.animals.filter(animal => animal.id !== action.payload);
        },
        setSelectedAnimal: (state, action: PayloadAction<Animal | null>) => {
            state.selectedAnimal = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    setLoading,
    setError,
    setAnimals,
    addAnimal,
    updateAnimal,
    deleteAnimal,
    setSelectedAnimal,
    clearError,
} = animalsSlice.actions;

export default animalsSlice.reducer;
