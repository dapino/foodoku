import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Search from './src/components/SearchView';

export default function App() {
  return (
    <NavigationContainer>
      <Search />
    </NavigationContainer>
  );
}
