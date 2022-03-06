import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from '../types';

import HomeScreen from '../screens/HomeScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import UsersScreen from '../screens/UsersScreen';
import SettingScreen from '../screens/Settings';
import GroupInfoScreen from '../screens/GroupInfoScreen';
import HomeHeader from './HomeHeader';
import ChatRoomHeader from './ChatRoomHeader';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <HomeHeader />,
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={() => ({
          headerTitle: () => <ChatRoomHeader />,
        })}
      />
      <Stack.Screen name="GroupInfoScreen" component={GroupInfoScreen} />
      <Stack.Screen
        name="UsersScreen"
        options={{
          title: 'Users',
        }}
        component={UsersScreen}
      />
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;