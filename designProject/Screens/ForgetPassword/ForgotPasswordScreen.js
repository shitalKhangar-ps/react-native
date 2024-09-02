import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './ForgotPasswordScreenStyles';

const ForgotPasswordScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState('phone');

  const backButtonContainer = () => {
    return (
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          source={require('../../images/BackArrow.png')}
          style={styles.BackArrowimage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    )
  }

  const imageContainer = () => {
    return (
      <View>
        <Text style={styles.title}>Forgot password 🤔</Text>
        <Text style={styles.subtitle}>
          Select which contact details should we use to reset your password.
        </Text>

        <View style={styles.imageContainer}>
          <Image
            source={require('../../images/ForgetPassword.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
    )
  }

  const optionContainer = () => {
    return (
      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === 'email' && styles.selectedOption,
          ]}
          onPress={() => setSelectedOption('email')}
        >
          <View style={styles.iconContainer}>
            <Image
              source={require('../../images/mail.png')}
              style={styles.mailImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.optionTitle}>Email</Text>
            <Text style={styles.optionSubtitle}>michael.mic@example.com</Text>
          </View>
          {selectedOption === 'email' ? (
            <Icon name="radio-button-on-outline" size={24} color="#007BFF" />
          ) : (
            <Icon name="radio-button-off-outline" size={24} color="#000" />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === 'phone' && styles.selectedOption,
          ]}
          onPress={() => setSelectedOption('phone')}
        >
          <View style={styles.iconContainer}>
            <Image
              source={require('../../images/call.png')}
              style={styles.mailImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.optionTitle}>Phone Number</Text>
            <Text style={styles.optionSubtitle}>(217) 555-0113</Text>
          </View>
          {selectedOption === 'phone' ? (
            <Icon name="radio-button-on-outline" size={24} color="#007BFF" />
          ) : (
            <Icon name="radio-button-off-outline" size={24} color="#000" />
          )}
        </TouchableOpacity>
      </View>
    )
  }

  const continueButton = () => {
    return (
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate("Verification")}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {backButtonContainer()}
        {imageContainer()}
        {optionContainer()}
        {continueButton()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
