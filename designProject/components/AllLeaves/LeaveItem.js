import React, { useState } from 'react';
import { View, Text } from 'react-native';
import LeaveSubItem from './LeaveSubItem';
import { styles } from '../../Screens/LeaveScreen/LeaveScreenStyle';
const LeaveItem = ({ date, applyDays, leaveBalance, approvedBy, status }) => (
    <View style={styles.leaveItem}>
      <View style={styles.leaveItemHeader}>
        <LeaveSubItem
        title='date'
        value={date}
        />
         <View>
         <Text style={[styles.leaveItemStatus, { color: status === 'Approved' ? '#6fd2cc' : '#ffa59d', backgroundColor:status==='Approved'?'#f5fcfb':'#fff9f8'}]}>{status}</Text>
        </View>
      </View>
      <View style={styles.leaveItemDetails}>
        <LeaveSubItem
        title='Apply Days'
        value={applyDays}
        />
        <LeaveSubItem
        title='Leave Balance'
        value={leaveBalance}
        />
        <LeaveSubItem
        title='Approved By'
        value={approvedBy}
        />
       
      </View>
    </View>
  );
  export default LeaveItem;