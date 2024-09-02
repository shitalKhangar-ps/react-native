import React, { useState } from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';
import { styles } from '../../Screens/LeaveScreen/LeaveScreenStyle';
const TeamLeave =({ name, date,url })=>(
    <View style ={styles.leaveItem}>
      <View style={styles.TeamLeaveContainer}>
      <Image source={url} style={styles.profileicon} />
      <View style={styles.TeamLeaves}>
      <Text style={styles.TeamLeaveName}>{name}</Text>
      <Text style={styles.TeamleaveItemDate}>{date}</Text>
      </View>
        
      </View >
      <View style={styles.TeamLeveButton}>
      <TouchableOpacity
        style={styles.rejectButton}>
        <Image source={require('../../images/cross-button.png')} style={styles.Icon} />
        <Text style={styles.Button}>Reject</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.AcceptButton}>
        <Image source={require('../../images/check-mark.png')} style={styles.Icon} />
        <Text style={styles.Button}>Accept</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
  export default TeamLeave;