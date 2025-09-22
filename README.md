# 🐄 भारत पशुधन ऐप (Bharat Pashudhan App)

![React Native](https://img.shields.io/badge/React%20Native-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

## 📱 Overview

**BPA (Bharat Pashudhan App)** is a comprehensive React Native application designed specifically for livestock management in India. This mobile application empowers farmers and livestock owners to efficiently manage their animals with modern digital tools, featuring health tracking, breeding management, market information, and government scheme details.

The app supports both **English** and **Hindi (हिंदी)** languages, making it accessible to farmers across India, and includes features tailored to the Indian agricultural ecosystem.

## ✨ Key Features

### 🐄 **Livestock Management**
- **Complete Animal Inventory**: Maintain detailed profiles for all your livestock
- **Animal Registration**: Add, edit, and manage individual animal records
- **Physical Characteristics**: Track weight, color, breed, and identification details
- **Photo Documentation**: Capture and store photos for visual identification
- **Status Tracking**: Monitor animal health status (healthy, pregnant, sick, etc.)

### 🏥 **Health & Veterinary Care**
- **Vaccination Schedules**: Automated reminders for upcoming vaccinations
- **Health Records**: Comprehensive medical history for each animal
- **Disease Tracking**: Monitor and log illness episodes and treatments
- **Veterinary Integration**: Connect with local veterinary services
- **Treatment History**: Detailed medication and treatment logs

### 💕 **Breeding Management**
- **Breeding Records**: Track mating schedules and breeding cycles
- **Pregnancy Monitoring**: Monitor gestation periods and expected delivery dates
- **Genealogy Tracking**: Maintain family trees and offspring records
- **Performance Analytics**: Analyze breeding success rates and patterns
- **AI/Natural Breeding**: Support for both artificial and natural breeding methods

### 📊 **Market Intelligence**
- **Real-time Prices**: Current livestock market prices by region
- **Price Trends**: Historical data and trend analysis
- **Market Alerts**: Notifications for favorable selling conditions
- **Location-based Data**: Regional market information

### 🏛️ **Government Schemes & Support**
- **Scheme Information**: Detailed info about livestock-related government programs
- **Eligibility Checker**: Determine qualification for various schemes
- **Application Guidance**: Step-by-step application processes
- **Contact Directory**: Government office contacts and helpline numbers

### 🩺 **Veterinary Services Directory**
- **Service Locator**: Find nearby veterinary clinics and doctors
- **Emergency Services**: Quick access to emergency veterinary care
- **Specialist Directory**: Connect with specialized animal health experts
- **Service Reviews**: Community-driven veterinary service ratings

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| **Framework** | React Native with Expo SDK 51 |
| **Language** | TypeScript |
| **Navigation** | React Navigation v6 |
| **State Management** | Redux Toolkit |
| **Local Storage** | AsyncStorage / SQLite |
| **UI Components** | React Native Elements + Custom Components |
| **Icons** | Expo Vector Icons |
| **Camera/Media** | Expo Camera & Image Picker |
| **Charts** | React Native Chart Kit |
| **Forms** | Formik + Yup validation |
| **Date Handling** | date-fns |

## 📁 Project Structure

```
src/
├── 📱 App.tsx                  # Main app component
├── 🧩 components/              # Reusable UI components
│   ├── AnimalCard.tsx          # Animal display cards
│   ├── StatCard.tsx            # Statistics display
│   └── ...
├── 🎨 constants/               # App constants and configurations
│   └── index.ts                # Colors, sizes, API endpoints
├── 🧭 navigation/              # Navigation configuration
│   └── AppNavigator.tsx        # Main navigation setup
├── 📄 screens/                 # App screens/pages
│   ├── HomeScreen.tsx          # Dashboard
│   ├── AnimalsScreen.tsx       # Animal listing
│   ├── HealthRecordsScreen.tsx # Health management
│   ├── BreedingRecordsScreen.tsx # Breeding management
│   └── ...
├── 🔧 services/               # API and storage services
│   └── storageService.ts       # Local data persistence
├── 🏪 store/                  # Redux store and slices
│   ├── index.ts               # Store configuration
│   └── slices/                # Feature-specific state
├── 📋 types/                  # TypeScript type definitions
│   └── index.ts               # Interface definitions
└── 🛠️ utils/                  # Utility functions
    └── helpers.ts             # Common helper functions
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn**
- **Expo CLI** (install with `npm install -g @expo/cli`)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development - macOS only)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/TechTitan360/BPA.git
   cd BPA
   ```

2. **Navigate to the project directory**:
   ```bash
   cd "BPA - Copy"
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

5. **Run on your preferred platform**:
   ```bash
   # For Android (requires Android emulator or device)
   npm run android
   
   # For iOS (macOS only, requires iOS simulator or device)
   npm run ios
   
   # For web browser
   npm run web
   ```

### 📱 Testing on Device

1. **Install Expo Go** app on your mobile device:
   - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [iOS](https://apps.apple.com/us/app/expo-go/id982107779)

2. **Scan the QR code** displayed in your terminal or browser after running `npm start`

## 🎯 Usage Guide

### First-Time Setup
1. **Language Selection**: Choose between English and Hindi
2. **Profile Creation**: Set up your farmer profile with location details
3. **Animal Registration**: Add your first animals to the system

### Daily Operations
- **Health Checkups**: Log daily health observations
- **Feeding Records**: Track feeding schedules and nutrition
- **Breeding Activities**: Record mating and pregnancy updates
- **Market Monitoring**: Check current prices for your livestock

### Advanced Features
- **Analytics Dashboard**: View detailed reports and trends
- **Backup & Sync**: Export data for backup purposes
- **Offline Mode**: Core features work without internet

## 💻 Development Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Expo development server |
| `npm run android` | Run on Android device/emulator |
| `npm run ios` | Run on iOS device/simulator |
| `npm run web` | Run in web browser |
| `npm test` | Run test suite |
| `npm run lint` | Run ESLint code analysis |

## 📊 Data Models

### 🐄 Animal Profile
```typescript
interface Animal {
  id: string;
  name: string;
  species: 'cattle' | 'buffalo' | 'goat' | 'sheep' | 'pig' | 'chicken';
  breed: string;
  gender: 'male' | 'female';
  dateOfBirth?: Date;
  weight?: number;
  color: string;
  identificationNumber?: string;
  purchasePrice?: number;
  currentValue?: number;
  status: 'healthy' | 'sick' | 'pregnant' | 'sold' | 'deceased';
  photos?: string[];
}
```

### 🏥 Health Record
```typescript
interface HealthRecord {
  id: string;
  animalId: string;
  type: 'vaccination' | 'treatment' | 'checkup' | 'surgery' | 'disease';
  date: Date;
  veterinarianName?: string;
  description: string;
  medication?: string;
  cost?: number;
  nextDueDate?: Date;
}
```

### 💕 Breeding Record
```typescript
interface BreedingRecord {
  id: string;
  motherId: string;
  fatherId?: string;
  breedingDate: Date;
  breedingMethod: 'natural' | 'artificial';
  expectedDeliveryDate?: Date;
  status: 'planned' | 'in-progress' | 'successful' | 'failed';
}
```

## 🌐 Multilingual Support

The app currently supports:
- **English** (Primary)
- **हिंदी (Hindi)** (Devanagari script)
- **Regional languages** (planned for future releases)

All user-facing text, including government scheme information, is available in both languages.

## 📴 Offline Capabilities

- **Core Features**: Animal management, health records, and breeding data work offline
- **Local Storage**: All critical data stored locally using AsyncStorage
- **Sync on Connect**: Data synchronization when internet becomes available
- **Export Options**: Manual data export for backup purposes

## 🔮 Future Enhancements

- [ ] **Cloud Synchronization**: Multi-device data sync
- [ ] **AI Health Predictions**: Machine learning for disease prediction
- [ ] **IoT Integration**: Smart sensor data integration
- [ ] **Advanced Analytics**: Detailed performance reporting
- [ ] **Community Features**: Farmer forums and knowledge sharing
- [ ] **E-commerce Integration**: Direct selling platform
- [ ] **Insurance Integration**: Livestock insurance management
- [ ] **Weather Integration**: Weather-based care recommendations
- [ ] **Blockchain**: Supply chain traceability

## 🤝 Contributing

We welcome contributions to improve the Bharat Pashudhan App! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain consistent code formatting
- Add tests for new features
- Update documentation as needed
- Ensure multilingual support for new text

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🆘 Support & Community

- **📧 Email**: support@bharatpashudhan.com
- **🐛 Issues**: [GitHub Issues](../../issues)
- **💬 Discussions**: [GitHub Discussions](../../discussions)
- **📖 Documentation**: [Wiki](../../wiki)

## 🙏 Acknowledgments

- **Government of India** for livestock scheme information and support
- **Local veterinary services** for collaboration and expertise
- **Indian farmers** for valuable feedback and requirements
- **Open source community** for tools and libraries
- **React Native** and **Expo** teams for excellent frameworks

---

<div align="center">

**Made with ❤️ for Indian farmers and livestock owners**

*Empowering agriculture through technology*

![India Flag](https://img.shields.io/badge/Made%20in-India-orange?style=for-the-badge&labelColor=white&color=green)

</div>