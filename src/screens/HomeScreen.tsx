import React from 'react';
import { View } from 'react-native';
import UserProfile from '../components/UserProfile';

const HomeScreen = ({ user }) => {
  return (
    <View>
      <UserProfile user={user} />
    </View>
  );
};

export default HomeScreen;
