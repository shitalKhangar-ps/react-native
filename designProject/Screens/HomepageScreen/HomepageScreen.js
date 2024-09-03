import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import styles from './HomepageScreenStyles';
import SwipeButton from '../../components/SwipeButton/SwipeButton';
import { ScrollView } from 'react-native-gesture-handler';
import { activities, attendanceData, getFormattedDates, getTodayFormattedDate } from '../../helper/helper';

const HomepageScreen = () => {
  const [dates, setDates] = useState(getFormattedDates());
  const [selectedDate, setSelectedDate] = useState(getTodayFormattedDate());

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