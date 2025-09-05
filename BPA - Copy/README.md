# भारत पशुधन ऐप (Bharat Pashudhan App)

## Overview

BPA (Bharat Pashudhan App) is a comprehensive React Native application designed for livestock management in India. The app helps farmers and livestock owners manage their animals effectively with features like health tracking, breeding management, market information, and government scheme details.

## Features

### 🐄 Livestock Management
- Complete animal inventory with detailed profiles
- Add, edit, and manage livestock records
- Track physical characteristics, identification, and status
- Photo capture and storage for each animal

### 🏥 Health Tracking
- Vaccination schedules and reminders
- Health record management
- Disease tracking and treatment history
- Veterinary service integration

### 💕 Breeding Management
- Breeding record tracking
- Genealogy and offspring management
- Pregnancy monitoring
- Breeding performance analytics

### 📊 Market Information
- Real-time livestock market prices
- Price trend analysis
- Location-based market data

### 🏛️ Government Schemes
- Information about livestock-related government schemes
- Eligibility criteria and application process
- Contact information for assistance

### 🩺 Veterinary Services
- Find nearby veterinary services
- Contact information and specializations
- Emergency service availability

## Technology Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: React Navigation v6
- **State Management**: Redux Toolkit
- **Storage**: AsyncStorage (Local) / SQLite (Future)
- **UI Components**: React Native Elements / Custom Components
- **Icons**: Expo Vector Icons
- **Camera**: Expo Camera & Image Picker

## Project Structure

```
src/
├── components/          # Reusable UI components
├── constants/          # App constants and configurations
├── navigation/         # Navigation configuration
├── screens/           # App screens/pages
├── services/          # API and storage services
├── store/             # Redux store and slices
├── types/             # TypeScript type definitions
└── utils/             # Utility functions and helpers
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd BPA
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Scan the QR code with Expo Go app on your mobile device or run on simulator:
```bash
npm run android  # For Android
npm run ios      # For iOS
```

## Development Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run on web browser
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## Key Components

### AnimalCard
Displays animal information in a card format with actions for edit/delete.

### StatCard
Shows statistical information with icons and values.

### Navigation
- Tab-based navigation with 5 main sections
- Stack navigation for detailed views
- Proper screen transitions and headers

### Storage Service
- Local data persistence using AsyncStorage
- CRUD operations for all data types
- Data export/import functionality

## Data Models

### Animal
- Basic information (name, species, breed, gender)
- Physical characteristics (weight, color)
- Identification (ID numbers, tags)
- Status tracking (active, pregnant, sick, etc.)
- Financial data (purchase price, current value)

### Health Record
- Vaccination records
- Treatment history
- Disease tracking
- Veterinary information

### Breeding Record
- Mating information
- Pregnancy tracking
- Offspring records
- Breeding performance

## Multilingual Support

The app supports:
- English
- Hindi (हिंदी)
- Regional language support (planned)

## Offline Capability

- Core features work offline
- Data synchronization when online
- Local storage for critical information

## Future Enhancements

- [ ] Cloud synchronization
- [ ] AI-powered health predictions
- [ ] IoT device integration
- [ ] Advanced analytics and reporting
- [ ] Community features
- [ ] E-commerce integration
- [ ] Insurance integration
- [ ] Weather-based recommendations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For support and questions:
- Email: support@bharatpashudhan.com
- GitHub Issues: [Create an issue](../../issues)

## Screenshots

[Add screenshots of the app here]

## Acknowledgments

- Government of India for livestock schemes information
- Local veterinary services for collaboration
- Farmers and livestock owners for feedback and requirements

---

**Made with ❤️ for Indian farmers and livestock owners**
