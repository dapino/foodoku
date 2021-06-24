import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Card from './Card';
const Stack = createStackNavigator();

const RestaurantsList = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Card' component={Card} />
    </Stack.Navigator>
  );
};

export default RestaurantsList;
