import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={card}>
      <Text>{props.title}</Text>
    </View>
  );
};

const card = StyleSheet.create({
  card: {
    flex: 1,
    padding: 24,

  },
});

export default Card;
