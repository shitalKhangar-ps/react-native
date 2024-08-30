import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles} from './LeaveScreenStyle'
const LeaveScreen = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');

  const LeaveCard = ({ title, value, color,border }) => (
    <View style={[styles.card, { backgroundColor: color,borderColor:border }]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={[styles.cardValue, { color:border }]}>{value}</Text>
    </View>
  );

  const LeaveItem = ({ date, applyDays, leaveBalance, approvedBy, status }) => (
    <View style={styles.leaveItem}>
      <View style={styles.leaveItemHeader}>
         <View>
         <Text style={styles.leaveItemTitle}>Date</Text>
         <Text style={styles.leaveItemDate}>{date}</Text>
         </View>
         <View>
         <Text style={[styles.leaveItemStatus, { color: status === 'Approved' ? '#6fd2cc' : '#ffa59d', backgroundColor:status==='Approved'?'#f5fcfb':'#fff9f8'}]}>{status}</Text>
         </View>
       
      </View>
      <View style={styles.leaveItemDetails}>
        <View>
        <Text style={styles.leaveItemTitle}>Apply Days </Text>
        <Text style={styles.leaveItemDate}>{applyDays}</Text>
        </View>
        <View>
        <Text style={styles.leaveItemTitle}>Leave Balance </Text>
        <Text style={styles.leaveItemDate}>{leaveBalance}</Text>
        </View>
        <View>
        <Text style={styles.leaveItemTitle}>Approved By </Text>
        <Text style={styles.leaveItemDate}>{approvedBy}</Text>
        </View>
       
      </View>
    </View>
  );
  const TeamLeave =({ name, date })=>(
    <View style ={styles.leaveItem}>
      <View style={styles.TeamLeaveContainer}>
      <Image source={require('../../images/profilelogo.png')} style={styles.profileicon} />
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
  const TabContent = ({ tab }) => {
    switch (tab) {
      case 'Upcoming':
        return (
          <ScrollView>
            <LeaveItem
              date="Apr 15, 2023 - Apr 18, 2023"
              applyDays="3 Days"
              leaveBalance="16"
              approvedBy="Martin Doe"
              status="Approved"
            />
            <LeaveItem
              date="May 1, 2023 - May 3, 2023"
              applyDays="2 Days"
              leaveBalance="14"
              approvedBy="Pending"
              status="Pending"
            />
             <LeaveItem
              date="May 1, 2023 - May 3, 2023"
              applyDays="2 Days"
              leaveBalance="14"
              approvedBy="Pending"
              status="Pending"
            />
          </ScrollView>
        );
      case 'Past':
        return (
          <ScrollView>
            <LeaveItem
              date="Mar 10, 2023 - Mar 12, 2023"
              applyDays="2 Days"
              leaveBalance="19"
              approvedBy="Martin Doe"
              status="Approved"
            />
            <LeaveItem
              date="Feb 5, 2023 - Feb 7, 2023"
              applyDays="2 Days"
              leaveBalance="21"
              approvedBy="Jane Smith"
              status="Approved"
            />
          </ScrollView>
        );
      case 'Team Leave':
        return (
          <ScrollView>
            <TeamLeave
              date="Apr 20, 2023 - Apr 22, 2023"
              name="Jane Copper"
            />
            <TeamLeave
              date="May 5, 2023 - May 8, 2023"
              name="Janney Wilson"
              
            />
          </ScrollView>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>All Leaves</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
          <Image source={require('../../images/addleave.png')} style={styles.addLeave} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source={require('../../images/menu.png')} style={styles.addLeave} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.cardsContainer}>
        <LeaveCard title="Leave Balance" value="20" color="#eef5ff" border="#3085fe" />
        <LeaveCard title="Leave Approved" value="2" color="#f8fcf3" border="#aed752" />
        <LeaveCard title="Leave Pending" value="4" color="#f0f9f7" border="#30beb6" />
        <LeaveCard title="Leave Cancelled" value="10" color="#fff6f5" border="#fc8379"/>
      </View>

      <View style={styles.tabContainer}>
        {['Upcoming', 'Past', 'Team Leave'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.leaveList}>
        <TabContent tab={activeTab} />
      </ScrollView>

      
    </SafeAreaView>
  );
};



export default LeaveScreen;