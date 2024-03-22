import React from 'react';
import { Button } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const LoginForm = () => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      // You can dispatch user info here or navigate to the Home screen
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button title="Sign in with Google" onPress={signIn} />
  );
};

export default LoginForm;
