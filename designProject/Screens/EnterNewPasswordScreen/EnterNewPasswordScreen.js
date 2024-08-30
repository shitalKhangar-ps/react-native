import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {styles} from './EnterNewPasswordScreenStyles'
const EnterNewPasswordScreen = ({navigation}) => {
  const [newPassword, setNewPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showReEnterPassword, setShowReEnterPassword] = useState(false);
  

  return (
    <View style={styles.container}>
    {/* Back Button */}
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          source={require('../../images/BackArrow.png')}
          style={styles.BackArrowimage}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {/* Heading */}
      <Text style={styles.title}>Enter New Password</Text>
      <Text style={styles.subtitle}>Please enter your new password</Text>

      {/* Illustration */}
      <Image
        source={require('../../images/newpassword.png')} // Replace with your actual image
        style={styles.image}
        resizeMode="contain"
      />

     
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter New Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            secureTextEntry={!showNewPassword}
            placeholder="Enter New Password"
            value={newPassword}
            onChangeText={setNewPassword}
            placeholderTextColor="#B8B8B8"
          />
          <TouchableOpacity onPress={() => setShowNewPassword(!showNewPassword)}>
           
            {/* <Text style={styles.eyeIcon}>{showNewPassword ? '🙈' : '👁️'}</Text> */}
          </TouchableOpacity>
        </View>
      </View>

      {/* Re-Enter Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Re-Enter Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            secureTextEntry={!showReEnterPassword}
            placeholder="Re-Enter Password"
            value={reEnterPassword}
            onChangeText={setReEnterPassword}
            placeholderTextColor="#B8B8B8"
          />
          <TouchableOpacity onPress={() => setShowReEnterPassword(!showReEnterPassword)}>
            
            {/* <Text style={styles.eyeIcon}>{showReEnterPassword ? '🙈' : '👁️'}</Text> */}
          </TouchableOpacity>
        </View>
      </View>

     
      <TouchableOpacity style={styles.updateButton} onPress={()=>navigation.navigate("Login")}>
        <Text style={styles.updateButtonText}>Update Password</Text>
      </TouchableOpacity>
    </View>
  );
};



export default EnterNewPasswordScreen;
