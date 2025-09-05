// Animal Types
export interface Animal {
    id: string;
    name: string;
    species: 'cow' | 'buffalo' | 'goat' | 'sheep' | 'pig' | 'chicken' | 'other';
    breed: string;
    gender: 'male' | 'female';
    dateOfBirth: Date;
    weight: number;
    color: string;
    identificationNumber?: string;
    rfidTag?: string;
    earTag?: string;
    photo?: string;
    purchaseDate?: Date;
    purchasePrice?: number;
    currentValue?: number;
    status: 'active' | 'sold' | 'deceased' | 'pregnant' | 'sick';
    parentIds?: {
        mother?: string;
        father?: string;
    };
    location?: string;
    notes?: string;
    createdAt: Date;
    updatedAt: Date;
}

// Health Record Types
export interface HealthRecord {
    id: string;
    animalId: string;
    type: 'vaccination' | 'treatment' | 'checkup' | 'surgery' | 'disease';
    date: Date;
    veterinarianName?: string;
    veterinarianContact?: string;
    description: string;
    medication?: string;
    dosage?: string;
    cost?: number;
    nextDueDate?: Date;
    attachments?: string[];
    notes?: string;
    createdAt: Date;
}

// Breeding Record Types
export interface BreedingRecord {
    id: string;
    motherId: string;
    fatherId?: string;
    breedingDate: Date;
    breedingMethod: 'natural' | 'artificial';
    expectedDeliveryDate?: Date;
    actualDeliveryDate?: Date;
    numberOfOffspring?: number;
    offspringIds?: string[];
    complications?: string;
    veterinarianAssisted?: boolean;
    cost?: number;
    notes?: string;
    status: 'planned' | 'in-progress' | 'successful' | 'failed';
    createdAt: Date;
}

// Veterinary Service Types
export interface VeterinaryService {
    id: string;
    name: string;
    contactNumber: string;
    email?: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    specialization: string[];
    rating: number;
    distance?: number;
    availability: {
        days: string[];
        hours: string;
    };
    emergencyService: boolean;
    fees?: {
        consultation: number;
        visit: number;
    };
}

// Market Price Types
export interface MarketPrice {
    id: string;
    location: string;
    date: Date;
    prices: {
        [key: string]: {
            min: number;
            max: number;
            average: number;
            unit: string;
        };
    };
}

// Government Scheme Types
export interface GovernmentScheme {
    id: string;
    title: string;
    titleHindi: string;
    description: string;
    descriptionHindi: string;
    eligibility: string[];
    benefits: string[];
    applicationProcess: string;
    requiredDocuments: string[];
    lastDate?: Date;
    contactInfo: {
        phone?: string;
        email?: string;
        website?: string;
    };
    state?: string;
    category: 'subsidy' | 'loan' | 'insurance' | 'training' | 'healthcare';
    isActive: boolean;
}

// User Types
export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: {
        village: string;
        district: string;
        state: string;
        pincode: string;
    };
    preferredLanguage: 'en' | 'hi' | 'regional';
    farmSize?: number;
    experience?: number;
    specialization?: string[];
    registrationDate: Date;
}

// Navigation Types
export type RootStackParamList = {
    Home: undefined;
    AnimalList: undefined;
    AnimalDetail: { animalId: string };
    AddAnimal: undefined;
    EditAnimal: { animalId: string };
    HealthRecords: { animalId?: string };
    AddHealthRecord: { animalId: string };
    BreedingRecords: undefined;
    AddBreedingRecord: undefined;
    VeterinaryServices: undefined;
    MarketPrices: undefined;
    GovernmentSchemes: undefined;
    Settings: undefined;
    Profile: undefined;
};

export type TabParamList = {
    HomeTab: undefined;
    AnimalsTab: undefined;
    HealthTab: undefined;
    BreedingTab: undefined;
    ServicesTab: undefined;
};

// Component Props Types
export interface AnimalCardProps {
    animal: Animal;
    onPress: () => void;
}

export interface HealthRecordCardProps {
    record: HealthRecord;
    onPress: () => void;
}

export interface StatCardProps {
    title: string;
    value: string | number;
    icon: string;
    color?: string;
}

// Form Types
export interface AnimalFormData {
    name: string;
    species: Animal['species'];
    breed: string;
    gender: Animal['gender'];
    dateOfBirth: Date;
    weight: string;
    color: string;
    identificationNumber?: string;
    purchasePrice?: string;
    notes?: string;
}

export interface HealthRecordFormData {
    type: HealthRecord['type'];
    date: Date;
    veterinarianName?: string;
    description: string;
    medication?: string;
    cost?: string;
    nextDueDate?: Date;
    notes?: string;
}

// Store Types
export interface AppState {
    animals: Animal[];
    healthRecords: HealthRecord[];
    breedingRecords: BreedingRecord[];
    veterinaryServices: VeterinaryService[];
    marketPrices: MarketPrice[];
    governmentSchemes: GovernmentScheme[];
    user: User | null;
    isLoading: boolean;
    error: string | null;
}
