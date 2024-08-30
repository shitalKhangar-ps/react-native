import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { styles } from './RgisterScreenStyle';

export const Button = ({ title, onPress, style, textStyle }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

export const SocialButton = ({ title, icon, onPress }) => (
  <TouchableOpacity style={styles.googleButton} onPress={onPress}>
    <Image source={icon} style={styles.googleIcon} />
    <Text style={styles.googleButtonText}>{title}</Text>
  </TouchableOpacity>
);
