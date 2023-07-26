import 'expo-dev-client';
import { useState } from 'react';
import { Provider } from 'app/provider';
import { SplashScreen, Stack } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from '../hooks/useFonts';
import AppLoading from 'expo-app-loading';

const routes = [
  {
    key: 'home',
    name: 'Home'
    // component: Home,
    // icon: Search
  },

  {
    key: 'Add',
    name: 'Add'
    // component: Profile,
    // icon: Plus
  },

  {
    key: 'profile',
    name: 'Profile'
    // component: Profile,
    // icon: Settings
  }
];

const Tab = createBottomTabNavigator();

export default function App() {
  const [loading, isLoading] = useState(false);
  const loadFonts = async () => {
    await useFonts();
  };

  if (!loading) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => isLoading(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <Provider>
      <Stack />
    </Provider>
  );
}
