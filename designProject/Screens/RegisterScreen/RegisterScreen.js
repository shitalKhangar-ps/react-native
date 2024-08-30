import React from 'react';
import { ScrollView, Text, Image, View,TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { styles } from './RgisterScreenStyle';
import TextInputField from './TextInputField';
import CheckboxField from './CheckboxField';
import { Button, SocialButton } from './Button';

const RegisterScreen = ({navigation}) => {
  const { control, handleSubmit, formState: { errors }, watch } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../images/LoginIcon.png')} />
      <Text style={styles.title}>Register Account</Text>
      <Text style={styles.title}>to<Text style={styles.linkText}> HR Attendee</Text></Text>
      <Text style={styles.subtitle}>Hello there, register to continue</Text>

      <Controller
        control={control}
        name="firstName"
        rules={{ required: 'First name is required' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputField
            label="First Name"
            placeholder="Enter First Name"
            error={errors.firstName}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        rules={{ required: 'Last name is required' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputField
            label="Last Name"
            placeholder="Enter Last Name"
            error={errors.lastName}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        rules={{ 
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email format',
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputField
            label="Email Address"
            placeholder="Enter Email Address"
            error={errors.email}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{ 
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputField
            label="Password"
            placeholder="Enter Password"
            error={errors.password}
            secureTextEntry={!showPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        rules={{ 
          required: 'Please confirm your password',
          validate: (value) => value === watch('password') || 'Passwords do not match'
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputField
            label="Confirm Password"
            placeholder="Confirm Password"
            error={errors.confirmPassword}
            secureTextEntry={!showConfirmPassword}
            showPassword={showConfirmPassword}
            setShowPassword={setShowConfirmPassword}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="termsAccepted"
        rules={{ required: 'You must accept the terms and conditions' }}
        render={({ field: { onChange, value } }) => (
          <CheckboxField
            value={value}
            onValueChange={onChange}
            label="I agree to the Terms & Conditions & Privacy Policy set out by this site."
            error={errors.termsAccepted}
          />
        )}
      />

      <Button title="Register" onPress={handleSubmit(onSubmit)} />

      <Text style={styles.orText}>Or continue with social account</Text>

      <SocialButton 
        title="Google" 
        icon={require('../../images/googleicon.png')} 
        onPress={() => console.log('Google Sign In')} 
      />

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity   onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
