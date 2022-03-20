import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './Login.style';

function Login({navigation}) {
  const [loading, setLoading] = useState(false);

  const initialFormValues = {
    username: '',
    password: '',
  };

  const handleSignUp = () => {
    navigation.navigate('SignUpPage');
  };

  const handleFormSubmit = async formValues => {
    if (!formValues.username && !formValues.password) {
      showMessage({
        message: 'Please enter the all fields',
        type: 'danger',
      });
      return;
    }

    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.username,
        formValues.password,
      );
      setLoading(false);
      navigation.navigate('RoomsPage');
    } catch (error) {
      console.log(error.code);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>codetalks</Text>
      </View>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({handleChange, handleSubmit, values}) => (
          <>
            <View style={styles.input}>
              <Input
                placeholder={'enter your mail'}
                onChangeText={handleChange('username')}
                value={values.username}
              />
              <Input
                placeholder={'enter your password'}
                onChangeText={handleChange('password')}
                value={values.password}
                isSecure
              />
            </View>
            <View style={styles.button}>
              <Button text={'Log In'} onPress={handleSubmit} />
              <Button
                text={'Sign Up'}
                theme="secondary"
                onPress={handleSignUp}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

export default Login;
