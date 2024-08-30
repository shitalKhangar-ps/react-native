import React, { useRef } from 'react';
import { View, Text, Animated, PanResponder, Image } from 'react-native';
import styles from './SwipeButtonStyles'; 

const SWIPE_THRESHOLD = 10;

const SwipeButton = ({ onSwipeSuccess }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dx > SWIPE_THRESHOLD) {
          if (onSwipeSuccess) onSwipeSuccess();
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false
          }).start();
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false
          }).start();
        }
      }
    })
  ).current;

  return (
    <View style={styles.container}>
      <View style={styles.swipeContainer}>
        <Text style={styles.swipeText}>Swipe to Check In</Text>
        <Animated.View
          style={[styles.thumb, { transform: [{ translateX: pan.x }] }]}
          {...panResponder.panHandlers}
        >
          <Image
            source={require('../../images/arrow.png')}
            style={styles.profileImage}
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default SwipeButton;
