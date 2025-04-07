import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screens
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import BookingConfirmation from './components/BookingConfirmation';
import PreBooking from './components/PreBooking';
import MyBookings from './components/MyBookings';
import TrackBooking from './components/TrackBooking';

// Create stack navigator
const Stack = createStackNavigator();

/**
 * Main App Component
 * Sets up the navigation structure for the application
 */
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SearchForm"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#007BFF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="SearchForm" 
            component={SearchForm} 
            options={{ title: 'CargoConnect' }}
          />
          <Stack.Screen 
            name="SearchResults" 
            component={SearchResults} 
            options={{ title: 'Available Vehicles' }}
          />
          <Stack.Screen 
            name="BookingConfirmation" 
            component={BookingConfirmation} 
            options={{ title: 'Confirm Booking' }}
          />
          <Stack.Screen 
            name="PreBooking" 
            component={PreBooking} 
            options={{ title: 'Pre-Book Cargo' }}
          />
          <Stack.Screen 
            name="MyBookings" 
            component={MyBookings} 
            options={{ title: 'My Bookings' }}
          />
          <Stack.Screen 
            name="TrackBooking" 
            component={TrackBooking} 
            options={{ title: 'Track Cargo' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;