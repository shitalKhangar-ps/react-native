import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './Screens/LoginScreen/LoginScreen';
import ForgotPasswordScreen from './Screens/ForgetPassword/ForgotPasswordScreen';
import EnterNewPasswordScreen from './Screens/EnterNewPasswordScreen/EnterNewPasswordScreen';
import HomepageScreen from './Screens/HomepageScreen/HomepageScreen';
import Tab1Screen from './Screens/Tab1Screen/Tab1Screen';
import Tab2Screen from './Screens/Tab2Screen/Tab2Screen';
import Register from './Screens/RegisterScreen/RegisterScreen'
import Verification from './Screens/Verification/VerificationScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomepageScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Tab1" component={Tab1Screen} options={{ headerShown: false }}/>
      <Tab.Screen name="Tab2" component={Tab2Screen} options={{ headerShown: false }}/>
      <Tab.Screen name="Tab3" component={Tab2Screen} options={{ headerShown: false }}/>
      <Tab.Screen name="Tab4" component={Tab2Screen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="EnterNewPassword" component={EnterNewPasswordScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
      <Stack.Screen name="Tabs" component={TabsNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
