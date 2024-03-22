// ./src/screens/LoginScreen.tsx
import React from 'react';
import { View } from 'react-native';
import LoginForm from '../components/LoginForm';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      // Assuming userInfo has a 'user' field you want to pass
      navigation.navigate('Home', { user: userInfo.user });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <LoginForm onSignIn={handleGoogleSignIn} />
    </View>
  );
};

export default LoginScreen;
