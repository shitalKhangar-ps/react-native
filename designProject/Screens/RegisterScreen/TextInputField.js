import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './RgisterScreenStyle';

const TextInputField = ({ label, placeholder, error, secureTextEntry, showPassword, setShowPassword, onChange, onBlur, value }) => (
  <View>
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.passwordContainer}>
      <TextInput
        style={[styles.input, error && { borderColor: 'red' }]}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="lightgrey"
        secureTextEntry={secureTextEntry}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
          <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
        </TouchableOpacity>
      )}
    </View>
  </View>
   {error && <Text style={styles.errorText}>{error.message}</Text>}
   </View>
);

export default TextInputField;
