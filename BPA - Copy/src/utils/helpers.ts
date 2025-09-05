import { Animal, HealthRecord } from '../types';

// Date utilities
export const formatDate = (date: Date, format: 'short' | 'long' | 'display' = 'display'): string => {
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: format === 'short' ? 'short' : '2-digit',
        year: 'numeric',
    };

    if (format === 'long') {
        options.month = 'long';
    }

    return date.toLocaleDateString('en-IN', options);
};

export const calculateAge = (dateOfBirth: Date): { years: number; months: number; totalMonths: number } => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    const totalMonths = years * 12 + months;

    return { years, months, totalMonths };
};

export const getAgeString = (dateOfBirth: Date): string => {
    const { years, months } = calculateAge(dateOfBirth);

    if (years === 0) {
        return `${months} month${months !== 1 ? 's' : ''}`;
    } else if (months === 0) {
        return `${years} year${years !== 1 ? 's' : ''}`;
    } else {
        return `${years}y ${months}m`;
    }
};

export const isDateInFuture = (date: Date): boolean => {
    return date > new Date();
};

export const isDateOverdue = (date: Date): boolean => {
    return date < new Date();
};

export const getDaysBetween = (date1: Date, date2: Date): number => {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

// Animal utilities
export const getAnimalDisplayName = (animal: Animal): string => {
    return `${animal.name} (${animal.identificationNumber || animal.id.slice(-4)})`;
};

export const getAnimalStatusColor = (status: Animal['status']): string => {
    const statusColors = {
        active: '#4CAF50',
        pregnant: '#FF9800',
        sick: '#F44336',
        sold: '#9E9E9E',
        deceased: '#424242',
    };
    return statusColors[status] || '#9E9E9E';
};

export const getAnimalIcon = (species: Animal['species']): string => {
    const speciesIcons = {
        cow: 'pets',
        buffalo: 'pets',
        goat: 'cruelty-free',
        sheep: 'cruelty-free',
        pig: 'pets',
        chicken: 'flutter-dash',
        other: 'pets',
    };
    return speciesIcons[species] || 'pets';
};

export const categorizeAnimalsBySpecies = (animals: Animal[]) => {
    return animals.reduce((acc, animal) => {
        if (!acc[animal.species]) {
            acc[animal.species] = [];
        }
        acc[animal.species].push(animal);
        return acc;
    }, {} as Record<string, Animal[]>);
};

export const getAnimalStats = (animals: Animal[]) => {
    const total = animals.length;
    const bySpecies = categorizeAnimalsBySpecies(animals);
    const byStatus = animals.reduce((acc, animal) => {
        acc[animal.status] = (acc[animal.status] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const totalValue = animals.reduce((sum, animal) => {
        return sum + (animal.currentValue || animal.purchasePrice || 0);
    }, 0);

    const averageAge = animals.length > 0
        ? animals.reduce((sum, animal) => sum + calculateAge(animal.dateOfBirth).totalMonths, 0) / animals.length
        : 0;

    return {
        total,
        bySpecies,
        byStatus,
        totalValue,
        averageAge,
    };
};

// Health utilities
export const getUpcomingVaccinations = (healthRecords: HealthRecord[], days: number = 30): HealthRecord[] => {
    const today = new Date();
    const futureDate = new Date(today.getTime() + days * 24 * 60 * 60 * 1000);

    return healthRecords.filter(record => {
        if (record.type === 'vaccination' && record.nextDueDate) {
            const dueDate = new Date(record.nextDueDate);
            return dueDate >= today && dueDate <= futureDate;
        }
        return false;
    });
};

export const getOverdueVaccinations = (healthRecords: HealthRecord[]): HealthRecord[] => {
    const today = new Date();

    return healthRecords.filter(record => {
        if (record.type === 'vaccination' && record.nextDueDate) {
            const dueDate = new Date(record.nextDueDate);
            return dueDate < today;
        }
        return false;
    });
};

export const getHealthRecordsByType = (healthRecords: HealthRecord[]) => {
    return healthRecords.reduce((acc, record) => {
        if (!acc[record.type]) {
            acc[record.type] = [];
        }
        acc[record.type].push(record);
        return acc;
    }, {} as Record<string, HealthRecord[]>);
};

// Validation utilities
export const validateAnimalData = (animal: Partial<Animal>): string[] => {
    const errors: string[] = [];

    if (!animal.name || animal.name.trim().length < 2) {
        errors.push('Animal name must be at least 2 characters long');
    }

    if (!animal.species) {
        errors.push('Please select a species');
    }

    if (!animal.breed || animal.breed.trim().length === 0) {
        errors.push('Please select a breed');
    }

    if (!animal.gender) {
        errors.push('Please select a gender');
    }

    if (!animal.dateOfBirth) {
        errors.push('Please provide date of birth');
    } else if (animal.dateOfBirth > new Date()) {
        errors.push('Date of birth cannot be in the future');
    }

    if (!animal.weight || animal.weight <= 0) {
        errors.push('Please provide a valid weight');
    }

    return errors;
};

export const validateHealthRecord = (record: Partial<HealthRecord>): string[] => {
    const errors: string[] = [];

    if (!record.animalId) {
        errors.push('Animal ID is required');
    }

    if (!record.type) {
        errors.push('Please select a record type');
    }

    if (!record.date) {
        errors.push('Please provide a date');
    } else if (record.date > new Date()) {
        errors.push('Date cannot be in the future');
    }

    if (!record.description || record.description.trim().length === 0) {
        errors.push('Please provide a description');
    }

    if (record.nextDueDate && record.nextDueDate <= new Date()) {
        errors.push('Next due date must be in the future');
    }

    return errors;
};

// Search and filter utilities
export const searchAnimals = (animals: Animal[], query: string): Animal[] => {
    if (!query.trim()) return animals;

    const searchTerms = query.toLowerCase().split(' ');

    return animals.filter(animal => {
        const searchableText = [
            animal.name,
            animal.breed,
            animal.species,
            animal.color,
            animal.identificationNumber,
            animal.notes,
        ].join(' ').toLowerCase();

        return searchTerms.every(term => searchableText.includes(term));
    });
};

export const filterAnimalsByStatus = (animals: Animal[], status: Animal['status'][]): Animal[] => {
    if (status.length === 0) return animals;
    return animals.filter(animal => status.includes(animal.status));
};

export const filterAnimalsBySpecies = (animals: Animal[], species: Animal['species'][]): Animal[] => {
    if (species.length === 0) return animals;
    return animals.filter(animal => species.includes(animal.species));
};

export const sortAnimals = (animals: Animal[], sortBy: 'name' | 'age' | 'weight' | 'value', order: 'asc' | 'desc' = 'asc'): Animal[] => {
    const sorted = [...animals].sort((a, b) => {
        let comparison = 0;

        switch (sortBy) {
            case 'name':
                comparison = a.name.localeCompare(b.name);
                break;
            case 'age':
                comparison = new Date(a.dateOfBirth).getTime() - new Date(b.dateOfBirth).getTime();
                break;
            case 'weight':
                comparison = a.weight - b.weight;
                break;
            case 'value':
                const aValue = a.currentValue || a.purchasePrice || 0;
                const bValue = b.currentValue || b.purchasePrice || 0;
                comparison = aValue - bValue;
                break;
        }

        return order === 'desc' ? -comparison : comparison;
    });

    return sorted;
};

// Currency utilities
export const formatCurrency = (amount: number, currency: string = 'INR'): string => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
};

export const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-IN').format(num);
};

// String utilities
export const capitalizeFirst = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + '...';
};

// ID generation
export const generateId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const generateAnimalId = (species: string, count: number): string => {
    const prefix = species.substring(0, 3).toUpperCase();
    const number = (count + 1).toString().padStart(3, '0');
    return `${prefix}${number}`;
};
