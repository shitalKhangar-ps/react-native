import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LeaveCard from '../../components/AllLeaves/LeaveCard';
import TabContent from '../../components/AllLeaves/TabContent';
import {styles} from './LeaveScreenStyle'

const LeaveScreen = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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

      </ScrollView>
    </SafeAreaView>
  );
};



export default LeaveScreen;