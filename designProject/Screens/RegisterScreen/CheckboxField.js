import React from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { styles } from './RgisterScreenStyle';

const CheckboxField = ({ value, onValueChange, label, error }) => (
    <View>
        <View style={styles.checkboxContainer}>
            <CheckBox
                style={styles.checkbox}
                value={value}
                onValueChange={onValueChange}
                color={value ? '#007AFF' : undefined}
            />
            <Text style={styles.termsText}>
            I agree to the<Text style={styles.linkText}>Terms & Conditions & Privacy Policy</Text> set out by this site.
            </Text>

        </View>
        {error && <Text style={styles.errorText}>{error.message}</Text>}
    </View>
);

export default CheckboxField;
