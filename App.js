import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import AppNav from './navigation/AppNav';

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    async function loadResources() {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      SplashScreen.hideAsync(); 
    }
    loadResources();
  }, []);

  return (
    <AppNav />
  );
}

