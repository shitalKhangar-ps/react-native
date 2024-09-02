import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../Screens/LeaveScreen/LeaveScreenStyle';
 const LeaveCard = ({ title, value, color,border }) =>{
    return(
    <View style={[styles.card, { backgroundColor: color,borderColor:border }]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={[styles.cardValue, { color:border }]}>{value}</Text>
    </View>
  );}
  export default LeaveCard;