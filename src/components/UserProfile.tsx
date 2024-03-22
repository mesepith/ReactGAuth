// ./src/components/UserProfile.tsx
import React from 'react';
import { View, Text, Image } from 'react-native';

const UserProfile = ({ user }) => {
  return (
    <View>
      <Image source={{ uri: user.photo }} style={{ width: 100, height: 100 }} />
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
    </View>
  );
};

export default UserProfile;
