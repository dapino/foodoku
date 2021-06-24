import React from 'react';
import { View, Text } from 'react-native';
import Input from './searchBar/Input';
import Filters from './searchBar/Filters';

const SearchBar = () => {
  return (
    <View>
      <Input />
      <Filters />
    </View>
  );
};

export default SearchBar;
