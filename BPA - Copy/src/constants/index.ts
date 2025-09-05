// App Constants
export const APP_NAME = 'भारत पशुधन ऐप';
export const APP_NAME_EN = 'Bharat Pashudhan App';

// Colors
export const COLORS = {
    primary: '#1976D2',
    primaryDark: '#1565C0',
    secondary: '#4CAF50',
    accent: '#FF5722',
    background: '#f5f5f5',
    surface: '#ffffff',
    text: '#333333',
    textSecondary: '#666666',
    textLight: '#999999',
    border: '#e0e0e0',
    error: '#f44336',
    warning: '#ff9800',
    success: '#4caf50',
    info: '#2196f3',
};

// Fonts
export const FONTS = {
    regular: 'System',
    medium: 'System',
    bold: 'System',
};

// Sizes
export const SIZES = {
    // Global sizes
    base: 8,
    font: 14,
    radius: 8,
    padding: 16,
    margin: 16,

    // Font sizes
    largeTitle: 32,
    h1: 28,
    h2: 24,
    h3: 20,
    h4: 18,
    body: 16,
    caption: 14,
    small: 12,
};

// Animal Species
export const ANIMAL_SPECIES = [
    { value: 'cow', label: 'Cow', labelHindi: 'गाय' },
    { value: 'buffalo', label: 'Buffalo', labelHindi: 'भैंस' },
    { value: 'goat', label: 'Goat', labelHindi: 'बकरी' },
    { value: 'sheep', label: 'Sheep', labelHindi: 'भेड़' },
    { value: 'pig', label: 'Pig', labelHindi: 'सूअर' },
    { value: 'chicken', label: 'Chicken', labelHindi: 'मुर्गी' },
    { value: 'other', label: 'Other', labelHindi: 'अन्य' },
];

// Common Breeds
export const BREEDS = {
    cow: [
        'Gir', 'Sahiwal', 'Red Sindhi', 'Tharparkar', 'Rathi', 'Hariana',
        'Ongole', 'Krishna Valley', 'Deoni', 'Khillari', 'Jersey', 'Holstein Friesian'
    ],
    buffalo: [
        'Murrah', 'Mehsana', 'Jaffarabadi', 'Surti', 'Nagpuri', 'Pandharpuri',
        'Toda', 'Banni', 'Chilika', 'Kalahandi'
    ],
    goat: [
        'Jamunapari', 'Boer', 'Sirohi', 'Barbari', 'Osmanabadi', 'Malabari',
        'Surti', 'Jhakrana', 'Marwari', 'Black Bengal'
    ],
    sheep: [
        'Deccani', 'Bannur', 'Hassan', 'Mandya', 'Coimbatore', 'Nilgiri',
        'Rampur Bushair', 'Chokla', 'Malpura', 'Marwari'
    ],
    pig: [
        'Yorkshire', 'Landrace', 'Duroc', 'Hampshire', 'Ghungroo',
        'Agonda Goan', 'Nicobari', 'Tenyi Vo'
    ],
    chicken: [
        'Rhode Island Red', 'White Leghorn', 'Plymouth Rock', 'Brahma',
        'Aseel', 'Kadaknath', 'Chittagong', 'Busra'
    ],
    other: [
        'Mixed Breed', 'Local Breed', 'Unknown'
    ]
};

// Health Record Types
export const HEALTH_RECORD_TYPES = [
    { value: 'vaccination', label: 'Vaccination', labelHindi: 'टीकाकरण' },
    { value: 'treatment', label: 'Treatment', labelHindi: 'उपचार' },
    { value: 'checkup', label: 'Health Checkup', labelHindi: 'स्वास्थ्य जांच' },
    { value: 'surgery', label: 'Surgery', labelHindi: 'शल्य चिकित्सा' },
    { value: 'disease', label: 'Disease', labelHindi: 'रोग' },
];

// Common Vaccinations
export const VACCINATIONS = [
    'FMD (Foot and Mouth Disease)',
    'HS (Hemorrhagic Septicemia)',
    'BQ (Black Quarter)',
    'Anthrax',
    'Rabies',
    'Brucellosis',
    'PPR (Peste des Petits Ruminants)',
    'Enterotoxemia',
    'Newcastle Disease',
    'Fowl Pox',
];

// Indian States
export const INDIAN_STATES = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
    'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
    'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand',
    'West Bengal', 'Delhi', 'Jammu and Kashmir', 'Ladakh'
];

// Language Options
export const LANGUAGES = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
];

// Chart Colors
export const CHART_COLORS = [
    '#1976D2', '#4CAF50', '#FF5722', '#FF9800', '#9C27B0',
    '#607D8B', '#795548', '#F44336', '#2196F3', '#8BC34A'
];

// Default Pagination
export const PAGINATION = {
    DEFAULT_PAGE_SIZE: 10,
    MAX_PAGE_SIZE: 100,
};

// API Endpoints (for future use)
export const API_ENDPOINTS = {
    BASE_URL: 'https://api.bharatpashudhan.com',
    ANIMALS: '/animals',
    HEALTH_RECORDS: '/health-records',
    BREEDING_RECORDS: '/breeding-records',
    VETERINARY_SERVICES: '/veterinary-services',
    MARKET_PRICES: '/market-prices',
    GOVERNMENT_SCHEMES: '/government-schemes',
    USER: '/user',
};

// Storage Keys
export const STORAGE_KEYS = {
    USER_DATA: '@BPA:user_data',
    ANIMALS: '@BPA:animals',
    HEALTH_RECORDS: '@BPA:health_records',
    BREEDING_RECORDS: '@BPA:breeding_records',
    SETTINGS: '@BPA:settings',
    ONBOARDING_COMPLETED: '@BPA:onboarding_completed',
};

// App Settings
export const DEFAULT_SETTINGS = {
    language: 'en',
    notifications: {
        vaccination: true,
        breeding: true,
        health: true,
        market: false,
    },
    units: {
        weight: 'kg',
        distance: 'km',
        currency: 'INR',
    },
    theme: 'light',
};

// Form Validation
export const VALIDATION = {
    MIN_ANIMAL_NAME_LENGTH: 2,
    MAX_ANIMAL_NAME_LENGTH: 50,
    MIN_WEIGHT: 0.1,
    MAX_WEIGHT: 2000,
    PHONE_REGEX: /^[6-9]\d{9}$/,
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

// Date Formats
export const DATE_FORMATS = {
    DISPLAY: 'DD/MM/YYYY',
    API: 'YYYY-MM-DD',
    FULL: 'DD MMMM YYYY',
    SHORT: 'DD MMM',
};
