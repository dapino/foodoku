import React from 'react';
import { View, Text } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import CardList from './restaurants/CardList';
import Header from './layout/Header';
import SearchBar from './SearchBar';

// const Stack = createStackNavigator();

const Search = () => {
  return (
    <View>
      <Header />
      <SearchBar />
      <CardList />
    </View>

    //TODO Implement Navigation to enable Restauratn detail
    /* <Stack.Navigator>
      <Stack.Screen name='CardList' component={CardList} />
      <Stack.Screen name='Card' component={Card} />
    </Stack.Navigator> */
  );
};

export default Search;
