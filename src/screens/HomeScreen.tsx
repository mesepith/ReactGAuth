// ./src/screens/HomeScreen.tsx
import React from 'react';
import { View } from 'react-native';
import UserProfile from '../components/UserProfile';

const HomeScreen = ({ route }) => {
  const { user } = route.params;
  return (
    <View>
      <UserProfile user={user} />
    </View>
  );
};

export default HomeScreen;
