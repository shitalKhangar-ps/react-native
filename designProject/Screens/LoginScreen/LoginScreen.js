import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import styles from './LoginScreenStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const welcomeContainer = () => {
    return (
      <View>
        <View style={styles.iconContainer}>
          <Image source={require('../../images/LoginIcon.png')} />
        </View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomText}>Welcome Back 👋</Text>
          <Text style={styles.welcomText}>
            <Text>to </Text>
            <Text style={styles.highlightedColor}>HR Attendee</Text>
          </Text>
          <Text style={styles.logtocontinue}>Hello there, login to continue</Text>
        </View>
      </View>
    )
  }

  const formContainer = () => {
    return (
      <View style={styles.formContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="lightgrey"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
              placeholderTextColor="lightgrey"
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconWrapper}>
              <Icon
                name='eye'
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.forgetPassContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgetPassText}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tabs')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.socialTextContainer}>
          <View style={styles.line} />
          <Text style={styles.socialText}>Or continue with social account</Text>
        </View>

        <View style={styles.googlecontainer}>
          <TouchableOpacity
            style={styles.googlebutton}>
            <Image source={require('../../images/googleicon.png')} style={styles.googleIcon} />
            <Text style={styles.googlebuttonText}>Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const registerContainer = () => {
    return (
      <View style={styles.registerContainer}>
        <View style={styles.registerTextContainer}>
          <Text style={styles.text}>Didn’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {welcomeContainer()}
        {formContainer()}
        {registerContainer()}
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;
