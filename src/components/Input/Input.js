import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './Input.style';

const Input = ({ placeholder, value, onChangeText, isSecure }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor="white"
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default Input;