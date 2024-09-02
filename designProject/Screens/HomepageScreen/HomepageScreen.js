import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import styles from './HomepageScreenStyles';
import SwipeButton from '../../components/SwipeButton/SwipeButton';
import { ScrollView } from 'react-native-gesture-handler';

const getFormattedDates = () => {
  const today = new Date();
  const dates = [];
  for (let i = -3; i <= 3; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const day = date.getDate().toString().padStart(2, '0');
    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
    dates.push(`${day} ${weekday}`);
  }
  return dates;
};

const activities = [
  { id: '1', type: 'Check In', time: '10:00 am', date: 'April 17, 2023', status: 'On Time', imageSource: require('../../images/checkin.png') },
  { id: '2', type: 'Break In', time: '12:30 am', date: 'April 17, 2023', status: 'On Time', imageSource: require('../../images/BreakIcon.png') },
  { id: '3', type: 'Break', time: '16:30 am', date: 'April 17, 2023', status: 'On Time', imageSource: require('../../images/BreakIcon.png') },
  { id: '4', type: 'Check Out', time: '17:30 am', date: 'April 17, 2023', status: 'On Time', imageSource: require('../../images/BreakIcon.png') },
];

const attendanceData = [
  {
    id: '1',
    type: 'Check In',
    imageSource: require('../../images/checkin.png'),
    time: '10:20 am',
    status: 'On Time',
  },
  {
    id: '2',
    type: 'Check Out',
    imageSource: require('../../images/checkout.png'),
    time: '07:00 pm',
    status: 'Go Home',
  },
  {
    id: '3',
    type: 'Break Time',
    imageSource: require('../../images/BreakIcon.png'),
    time: '0:30 min',
    status: 'Avg Time 30 min',
  },
  {
    id: '4',
    type: 'Total Days',
    imageSource: require('../../images/daysIcon.png'),
    time: '28',
    status: 'Working Days',
  }
];

const HomepageScreen = () => {
  const [dates, setDates] = useState(getFormattedDates());
  const [selectedDate, setSelectedDate] = useState(dates[3]);

  useEffect(() => {
    setDates(getFormattedDates());
  }, []);

  const profileContainer = () => {
    return (
      <View style={styles.profileContainer}>
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <Image
              source={require('../../images/profilepic.png')}
              style={styles.profileImage}
            />
            <View style={styles.profileinfocontainer}>
              <Text style={styles.profileName}>Michael Mitc</Text>
              <Text style={styles.profileTitle}>Lead UI/UX Designer</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationIcon}>
            <Image
              source={require('../../images/notification.png')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.dateDayContainer}>
          <FlatList
            data={dates}
            renderItem={renderDateItem}
            keyExtractor={(item) => item}
            horizontal
            contentContainerStyle={styles.dateTabs}
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    )
  }

  const renderDateItem = ({ item }) => {
    const [number, day] = item.split(' ');
    return (
      <TouchableOpacity style={[styles.dateTab, item === selectedDate ? styles.activeTab : null]}
        onPress={() => setSelectedDate(item)}
      >
        <View style={styles.dateContent}>
          <Text style={[styles.dateNumber, item === selectedDate ? styles.activeDateText : null]}>
            {number}
          </Text>
          <Text style={[styles.dateDay, item === selectedDate ? styles.activeDateText : null]}>
            {day}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const attendanceContainer = () => {
    return (
      <View style={styles.attendanceContainer}>
        <Text style={styles.attendanceText}>Today Attendance</Text>
        <FlatList
          data={attendanceData}
          renderItem={renderAttendanceBlock}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
    )
  }

  const renderAttendanceBlock = ({ item }) => {
    const { imageSource, type, time, status } = item;
    return (
      <View style={styles.attendanceBlock}>
        <View style={styles.attendanceImageContainer}>
          <Image
            source={imageSource}
            style={styles.attendanceIcons}
          />
          <Text style={styles.attendanceLabel}>{type}</Text>
        </View>
        <Text style={styles.attendanceTime}>{time}</Text>
        <Text style={styles.attendanceStatus}>{status}</Text>
      </View>
    );
  }

  const activitySection = () => {
    return (
      <View style={styles.activitySection}>
        <View style={styles.activityViewAllContainer}>
          <Text style={styles.activityTitle}>Your Activity</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllTitle}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.activitiesList}>
          <FlatList
            data={activities}
            renderItem={renderActivityItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    )
  }

  const renderActivityItem = ({ item }) => {
    const { imageSource, type, date, time, status } = item;
    return (
      <View style={styles.activityItem}>
        <View style={styles.activityItemImgInfo}>
          <View>
            <Image source={imageSource} style={styles.profileImage} />
          </View>
          <View>
            <Text style={styles.activityType}>{type}</Text>
            <Text style={styles.activityDate}>{date}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.activityTime}>{time}</Text>
          <Text style={styles.activityStatus}>{status}</Text>
        </View>
      </View>
    );
  }

  const swipeButtonContainer = () => {
    return (
      <View style={styles.swipeButtonContainer}>
        <SwipeButton onSwipeSuccess={handleSwipeSuccess} />
      </View>
    )
  }

  const handleSwipeSuccess = () => {
    console.log('HomePage swipe successful!');
  };

  return (
    <SafeAreaView style={styles.container}>
      {profileContainer()}
      <ScrollView>
        {attendanceContainer()}
        {activitySection()}
        {swipeButtonContainer()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomepageScreen;