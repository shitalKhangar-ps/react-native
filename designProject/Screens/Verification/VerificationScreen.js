import React, { useState , useEffect} from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {styles} from './VerificationScreenStyle'
import Illustration from '../../components/common/Illustration';
import { SafeAreaView } from 'react-native-safe-area-context';
const VerificationScreen = ({navigation}) => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(30); 
  const [isResendDisabled, setIsResendDisabled] = useState(true); 

  const refInputs = [];

  useEffect(() => {
    
    const countdownInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          clearInterval(countdownInterval);
          setIsResendDisabled(false);
          return prevTime - 1;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);
  const handleResend = () => {
    setTimeLeft(30); 
    setIsResendDisabled(true);  
  };
  const handleChangeText = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

  
    if (text && index < 3) {
      refInputs[index + 1].focus();
    }
  };

  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === 'Backspace') {
      if (index > 0 && code[index] === "") {
      
        const newCode = [...code];
        newCode[index - 1] = "";
        setCode(newCode);
        refInputs[index - 1].focus();
      }
    }
  };

  return (
    <SafeAreaView>
    <ScrollView >
      <View style={styles.container}>
       <Illustration
        navigation={navigation}
        url={require('../../images/verificationicon.png')}
        title='Enter Verification Code'
        subtitle=' We have sent the code verification to your mobile number'
        />
      <View style={styles.codeInputContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChangeText(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            ref={(input) => refInputs[index] = input}
          />
        ))}
      </View>

      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>
        {timeLeft > 0 ? `00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}` : "00:00"}
        </Text>
        <TouchableOpacity onPress={handleResend} disabled={isResendDisabled}>
          <Text style={[styles.resendText, isResendDisabled && { color: 'gray' }]}>
            Resend it
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.verifyButton} onPress={()=>navigation.navigate("EnterNewPassword")}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
   
      </View>
       </ScrollView>
    </SafeAreaView>
  );
};


export default VerificationScreen;
