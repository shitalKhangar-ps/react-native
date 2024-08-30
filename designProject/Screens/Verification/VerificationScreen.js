import React, { useState , useEffect} from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {styles} from './VerificationScreenStyle'
const VerificationScreen = ({navigation}) => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(30); // Initial countdown value
  const [isResendDisabled, setIsResendDisabled] = useState(true); // Disable resend initially

  const refInputs = [];

  useEffect(() => {
    // Start the countdown when the component mounts
    const countdownInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          clearInterval(countdownInterval);
          setIsResendDisabled(false); // Enable resend when countdown ends
          return prevTime - 1;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(countdownInterval);
  }, []);
  const handleResend = () => {
    setTimeLeft(30); // Reset the countdown
    setIsResendDisabled(true); // Disable resend button again

    // Simulate resending the code
    // Here you would trigger the resend code API call
    console.log("Verification code resent!");
  };
  const handleChangeText = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move focus to the next input if a digit is entered
    if (text && index < 3) {
      refInputs[index + 1].focus();
    }
  };

  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === 'Backspace') {
      if (index > 0 && code[index] === "") {
        // Clear the previous input and move focus to it
        const newCode = [...code];
        newCode[index - 1] = "";
        setCode(newCode);
        refInputs[index - 1].focus();
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
         {/* Back Button */}
         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          source={require('../../images/BackArrow.png')}
          style={styles.BackArrowimage}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {/* Heading */}
      <Text style={styles.title}>Enter Verification Code</Text>
      <Text style={styles.subtitle}>
        We have sent the code verification to your mobile number
      </Text>

      {/* Illustration */}
      <Image
        source={require('../../images/verificationicon.png')}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Code Input Boxes */}
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

      {/* Timer and Resend Button */}
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

      {/* Verify Button */}
      <TouchableOpacity style={styles.verifyButton} onPress={()=>navigation.navigate("EnterNewPassword")}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


export default VerificationScreen;
