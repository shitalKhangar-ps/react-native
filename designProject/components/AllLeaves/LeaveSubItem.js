import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../Screens/LeaveScreen/LeaveScreenStyle';
const LeaveSubItem= ({title,value }) =>{
    return(
        <View>
        <Text style={styles.leaveItemTitle}>{title}</Text>
        <Text style={styles.leaveItemDate}>{value}</Text>
        </View>
  );}
  export default LeaveSubItem;