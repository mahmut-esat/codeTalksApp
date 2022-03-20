import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import styles from './SignUp.style';
import Button from '../../components/Button';
import Input from '../../components/Input';
import authErrorMessageParser from '../../utils/authErrorMessageParser';

function SignUp({navigation}) {
  const [loading, setLoading] = useState(false);
  const initialFormValues = {
    username: '',
    password: '',
    repassword: '',
  };

  const handleFormSubmit = async formValues => {
    if (!formValues.usermail && !formValues.password) {
      showMessage({
        message: 'Please enter the all fields',
        type: 'danger',
      });
      return;
    }

    if (formValues.password !== formValues.repassword) {
      console.log('Password confirmation must match password.');
      return;
    }

    // if (!formValues.usermail) {
    //   console.log('Kullanıcı Adı giriniz');
    //   return;
    // }

    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(
        formValues.username,
        formValues.password,
      );
      setLoading(false);
      navigation.navigate('LoginPage');
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
  };

  const handleLogin = () => {
    navigation.navigate('LoginPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title_text}>codetalks</Text>
      </View>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({handleChange, handleSubmit, values}) => (
          <>
            <View style={styles.input}>
              <Input
                placeholder={'enter your mail'}
                value={values.username}
                onChangeText={handleChange('username')}
              />
              <Input
                placeholder={'enter password'}
                value={values.password}
                onChangeText={handleChange('password')}
                isSecure
              />
              <Input
                placeholder={'confirm password'}
                value={values.repassword}
                onChangeText={handleChange('repassword')}
                isSecure
              />
            </View>
            <View style={styles.button}>
              <Button
                text={'Sign Up'}
                onPress={handleSubmit}
                loading={loading}
              />
              <Button theme={'secondary'} text={'Back'} onPress={handleLogin} />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

export default SignUp;
