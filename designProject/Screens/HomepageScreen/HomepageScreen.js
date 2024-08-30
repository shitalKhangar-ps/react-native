import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './HomepageScreenStyles';

function HomepageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Homepage Screen</Text>
    </View>
  );
}

export default HomepageScreen;
