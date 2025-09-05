import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../constants';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import AnimalsScreen from '../screens/AnimalsScreen';
import AnimalDetailScreen from '../screens/AnimalDetailScreen';
import AddAnimalScreen from '../screens/AddAnimalScreen';
import HealthRecordsScreen from '../screens/HealthRecordsScreen';
import AddHealthRecordScreen from '../screens/AddHealthRecordScreen';
import BreedingRecordsScreen from '../screens/BreedingRecordsScreen';
import AddBreedingRecordScreen from '../screens/AddBreedingRecordScreen';
import VeterinaryServicesScreen from '../screens/VeterinaryServicesScreen';
import MarketPricesScreen from '../screens/MarketPricesScreen';
import GovernmentSchemesScreen from '../screens/GovernmentSchemesScreen';
import SettingsScreen from '../screens/SettingsScreen';

import { RootStackParamList, TabParamList } from '../types';

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

// Home Stack Navigator
const HomeStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="VeterinaryServices" component={VeterinaryServicesScreen} />
        <Stack.Screen name="MarketPrices" component={MarketPricesScreen} />
        <Stack.Screen name="GovernmentSchemes" component={GovernmentSchemesScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
);

// Animals Stack Navigator
const AnimalsStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: COLORS.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}
    >
        <Stack.Screen name="AnimalList" component={AnimalsScreen} options={{ title: 'My Livestock' }} />
        <Stack.Screen name="AnimalDetail" component={AnimalDetailScreen} options={{ title: 'Animal Details' }} />
        <Stack.Screen name="AddAnimal" component={AddAnimalScreen} options={{ title: 'Add Animal' }} />
        <Stack.Screen name="EditAnimal" component={AddAnimalScreen} options={{ title: 'Edit Animal' }} />
    </Stack.Navigator>
);

// Health Stack Navigator
const HealthStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: COLORS.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}
    >
        <Stack.Screen name="HealthRecords" component={HealthRecordsScreen} options={{ title: 'Health Records' }} />
        <Stack.Screen name="AddHealthRecord" component={AddHealthRecordScreen} options={{ title: 'Add Health Record' }} />
    </Stack.Navigator>
);

// Breeding Stack Navigator
const BreedingStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: COLORS.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}
    >
        <Stack.Screen name="BreedingRecords" component={BreedingRecordsScreen} options={{ title: 'Breeding Records' }} />
        <Stack.Screen name="AddBreedingRecord" component={AddBreedingRecordScreen} options={{ title: 'Add Breeding Record' }} />
    </Stack.Navigator>
);

// Services Stack Navigator
const ServicesStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: COLORS.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}
    >
        <Stack.Screen name="VeterinaryServices" component={VeterinaryServicesScreen} options={{ title: 'Veterinary Services' }} />
    </Stack.Navigator>
);

// Main Tab Navigator
const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName: keyof typeof MaterialIcons.glyphMap;

                if (route.name === 'HomeTab') {
                    iconName = 'home';
                } else if (route.name === 'AnimalsTab') {
                    iconName = 'pets';
                } else if (route.name === 'HealthTab') {
                    iconName = 'local-hospital';
                } else if (route.name === 'BreedingTab') {
                    iconName = 'favorite';
                } else if (route.name === 'ServicesTab') {
                    iconName = 'medical-services';
                } else {
                    iconName = 'home';
                }

                return <MaterialIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
        })}
    >
        <Tab.Screen
            name="HomeTab"
            component={HomeStack}
            options={{
                tabBarLabel: 'Home',
                title: 'Home'
            }}
        />
        <Tab.Screen
            name="AnimalsTab"
            component={AnimalsStack}
            options={{
                tabBarLabel: 'Animals',
                title: 'Animals'
            }}
        />
        <Tab.Screen
            name="HealthTab"
            component={HealthStack}
            options={{
                tabBarLabel: 'Health',
                title: 'Health'
            }}
        />
        <Tab.Screen
            name="BreedingTab"
            component={BreedingStack}
            options={{
                tabBarLabel: 'Breeding',
                title: 'Breeding'
            }}
        />
        <Tab.Screen
            name="ServicesTab"
            component={ServicesStack}
            options={{
                tabBarLabel: 'Services',
                title: 'Services'
            }}
        />
    </Tab.Navigator>
);

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;
