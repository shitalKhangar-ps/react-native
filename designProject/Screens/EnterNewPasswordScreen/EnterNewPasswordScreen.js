import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {styles} from './EnterNewPasswordScreenStyles'
import { ScrollView } from 'react-native-gesture-handler';
import Illustration from '../../components/common/Illustration';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextInputField from '../../components/common/TextInputField';
const EnterNewPasswordScreen = ({navigation}) => {
  const [newPassword, setNewPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showReEnterPassword, setShowReEnterPassword] = useState(false);
  

  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.container}>
      <Illustration
      navigation={navigation}
      url={require('../../images/newpassword.png')}
      title='Enter New Password'
      subtitle='Please enter your new password'
      />
      <TextInputField 
            label="Enter New Password"
            placeholder="Enter New Password"
            // error={errors.password}
            secureTextEntry={!showNewPassword}
            showPassword={showNewPassword}
            setShowPassword={setNewPassword}
            onChange={setNewPassword}
            value={newPassword}
      />

      <TextInputField 
            label="Re-Enter Password"
            placeholder="Enter New Password"
            // error={errors.password}
            secureTextEntry={!showReEnterPassword}
            showPassword={showReEnterPassword}
            setShowPassword={setReEnterPassword}
            onChange={setReEnterPassword}
            value={reEnterPassword}
      />
     
      <TouchableOpacity style={styles.updateButton} onPress={()=>navigation.navigate("Login")}>
        <Text style={styles.updateButtonText}>Update Password</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};



export default EnterNewPasswordScreen;
