import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useEntries from '../../hooks/useEntries';
import Card from './Card';

const CardList = () => {
  const { restaurantsList, loading } = useEntries('restaurant');

  const renderCards = () => (
    <View>
      {restaurantsList.map((restaurant) => {
        restaurant.fields.imageUrl;
        return <Card key={restaurant.sys.id} title={restaurant.fields.name} />;
      })}
    </View>
  );

  return <View>{loading ? <Text>Fetching...</Text> : renderCards()}</View>;
};

const grid = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
});

export default CardList;
