import AsyncStorage from '@react-native-async-storage/async-storage';
import { Animal, HealthRecord, BreedingRecord, User } from '../types';
import { STORAGE_KEYS } from '../constants';

// Animal Storage Operations
export const animalStorage = {
    async getAll(): Promise<Animal[]> {
        try {
            const data = await AsyncStorage.getItem(STORAGE_KEYS.ANIMALS);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Error getting animals:', error);
            return [];
        }
    },

    async save(animals: Animal[]): Promise<void> {
        try {
            await AsyncStorage.setItem(STORAGE_KEYS.ANIMALS, JSON.stringify(animals));
        } catch (error) {
            console.error('Error saving animals:', error);
            throw error;
        }
    },

    async add(animal: Animal): Promise<void> {
        try {
            const animals = await this.getAll();
            animals.push(animal);
            await this.save(animals);
        } catch (error) {
            console.error('Error adding animal:', error);
            throw error;
        }
    },

    async update(updatedAnimal: Animal): Promise<void> {
        try {
            const animals = await this.getAll();
            const index = animals.findIndex(animal => animal.id === updatedAnimal.id);
            if (index !== -1) {
                animals[index] = updatedAnimal;
                await this.save(animals);
            }
        } catch (error) {
            console.error('Error updating animal:', error);
            throw error;
        }
    },

    async delete(animalId: string): Promise<void> {
        try {
            const animals = await this.getAll();
            const filteredAnimals = animals.filter(animal => animal.id !== animalId);
            await this.save(filteredAnimals);
        } catch (error) {
            console.error('Error deleting animal:', error);
            throw error;
        }
    },

    async getById(animalId: string): Promise<Animal | null> {
        try {
            const animals = await this.getAll();
            return animals.find(animal => animal.id === animalId) || null;
        } catch (error) {
            console.error('Error getting animal by ID:', error);
            return null;
        }
    },
};

// Health Records Storage Operations
export const healthRecordStorage = {
    async getAll(): Promise<HealthRecord[]> {
        try {
            const data = await AsyncStorage.getItem(STORAGE_KEYS.HEALTH_RECORDS);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Error getting health records:', error);
            return [];
        }
    },

    async save(records: HealthRecord[]): Promise<void> {
        try {
            await AsyncStorage.setItem(STORAGE_KEYS.HEALTH_RECORDS, JSON.stringify(records));
        } catch (error) {
            console.error('Error saving health records:', error);
            throw error;
        }
    },

    async add(record: HealthRecord): Promise<void> {
        try {
            const records = await this.getAll();
            records.push(record);
            await this.save(records);
        } catch (error) {
            console.error('Error adding health record:', error);
            throw error;
        }
    },

    async getByAnimalId(animalId: string): Promise<HealthRecord[]> {
        try {
            const records = await this.getAll();
            return records.filter(record => record.animalId === animalId);
        } catch (error) {
            console.error('Error getting health records by animal ID:', error);
            return [];
        }
    },

    async delete(recordId: string): Promise<void> {
        try {
            const records = await this.getAll();
            const filteredRecords = records.filter(record => record.id !== recordId);
            await this.save(filteredRecords);
        } catch (error) {
            console.error('Error deleting health record:', error);
            throw error;
        }
    },
};

// Breeding Records Storage Operations
export const breedingRecordStorage = {
    async getAll(): Promise<BreedingRecord[]> {
        try {
            const data = await AsyncStorage.getItem(STORAGE_KEYS.BREEDING_RECORDS);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Error getting breeding records:', error);
            return [];
        }
    },

    async save(records: BreedingRecord[]): Promise<void> {
        try {
            await AsyncStorage.setItem(STORAGE_KEYS.BREEDING_RECORDS, JSON.stringify(records));
        } catch (error) {
            console.error('Error saving breeding records:', error);
            throw error;
        }
    },

    async add(record: BreedingRecord): Promise<void> {
        try {
            const records = await this.getAll();
            records.push(record);
            await this.save(records);
        } catch (error) {
            console.error('Error adding breeding record:', error);
            throw error;
        }
    },

    async delete(recordId: string): Promise<void> {
        try {
            const records = await this.getAll();
            const filteredRecords = records.filter(record => record.id !== recordId);
            await this.save(filteredRecords);
        } catch (error) {
            console.error('Error deleting breeding record:', error);
            throw error;
        }
    },
};

// User Storage Operations
export const userStorage = {
    async get(): Promise<User | null> {
        try {
            const data = await AsyncStorage.getItem(STORAGE_KEYS.USER_DATA);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error getting user data:', error);
            return null;
        }
    },

    async save(user: User): Promise<void> {
        try {
            await AsyncStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(user));
        } catch (error) {
            console.error('Error saving user data:', error);
            throw error;
        }
    },

    async clear(): Promise<void> {
        try {
            await AsyncStorage.removeItem(STORAGE_KEYS.USER_DATA);
        } catch (error) {
            console.error('Error clearing user data:', error);
            throw error;
        }
    },
};

// Settings Storage Operations
export const settingsStorage = {
    async get(): Promise<any> {
        try {
            const data = await AsyncStorage.getItem(STORAGE_KEYS.SETTINGS);
            return data ? JSON.parse(data) : {};
        } catch (error) {
            console.error('Error getting settings:', error);
            return {};
        }
    },

    async save(settings: any): Promise<void> {
        try {
            await AsyncStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
        } catch (error) {
            console.error('Error saving settings:', error);
            throw error;
        }
    },
};

// Utility functions
export const generateId = (): string => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};

export const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
};

export const parseDate = (dateString: string): Date => {
    return new Date(dateString);
};

// Data export/import functions
export const exportData = async (): Promise<string> => {
    try {
        const animals = await animalStorage.getAll();
        const healthRecords = await healthRecordStorage.getAll();
        const breedingRecords = await breedingRecordStorage.getAll();
        const user = await userStorage.get();
        const settings = await settingsStorage.get();

        const exportData = {
            animals,
            healthRecords,
            breedingRecords,
            user,
            settings,
            exportDate: new Date().toISOString(),
            version: '1.0.0',
        };

        return JSON.stringify(exportData, null, 2);
    } catch (error) {
        console.error('Error exporting data:', error);
        throw error;
    }
};

export const importData = async (dataString: string): Promise<void> => {
    try {
        const data = JSON.parse(dataString);

        if (data.animals) {
            await animalStorage.save(data.animals);
        }
        if (data.healthRecords) {
            await healthRecordStorage.save(data.healthRecords);
        }
        if (data.breedingRecords) {
            await breedingRecordStorage.save(data.breedingRecords);
        }
        if (data.user) {
            await userStorage.save(data.user);
        }
        if (data.settings) {
            await settingsStorage.save(data.settings);
        }
    } catch (error) {
        console.error('Error importing data:', error);
        throw error;
    }
};

// Clear all data
export const clearAllData = async (): Promise<void> => {
    try {
        await AsyncStorage.multiRemove([
            STORAGE_KEYS.ANIMALS,
            STORAGE_KEYS.HEALTH_RECORDS,
            STORAGE_KEYS.BREEDING_RECORDS,
            STORAGE_KEYS.USER_DATA,
            STORAGE_KEYS.SETTINGS,
        ]);
    } catch (error) {
        console.error('Error clearing all data:', error);
        throw error;
    }
};
