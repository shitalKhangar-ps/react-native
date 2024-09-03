import React,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../Screens/RegisterScreen/RgisterScreenStyle';

const TextInputField = ({ label, placeholder, error, secureTextEntry, showPassword, setShowPassword, onChange, onBlur, value, }) => {
  const [isFocused, setIsFocused] = useState(false);
 return (
  <View>
  <View style={[styles.inputContainer, isFocused && { borderColor: '#007AFF' }]}>
    <Text style={[styles.label, isFocused && { color: '#007AFF' }]}>{label}</Text>
    <View style={styles.passwordContainer}>
      <TextInput
        style={[styles.input, error && { borderColor: 'red' }]}
        onBlur={() => {
          onBlur();
          setIsFocused(false);
        }}
        onFocus={() => setIsFocused(true)}
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
);}

export default TextInputField;
