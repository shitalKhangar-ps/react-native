import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {styles} from '../../Screens/EnterNewPasswordScreen/EnterNewPasswordScreenStyles'

const Illustration = ({navigation,url,title,subtitle,}) => {

    return(
        <View>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          source={require('../../images/BackArrow.png')}
          style={styles.BackArrowimage}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {/* Heading */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      {/* Illustration */}
      <Image
        source={url}
        style={styles.image}
        resizeMode="contain"
      />
        </View>
    )
}
export default Illustration;