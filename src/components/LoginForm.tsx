// ./src/components/LoginForm.tsx
import React from 'react';
import { Button } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const LoginForm = ({ onSignIn }) => {
  return (
    <Button title="Sign in with Google" onPress={onSignIn} />
  );
};

export default LoginForm;
