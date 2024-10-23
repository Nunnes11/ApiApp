import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PostsScreen from './screens/PostsScreen';
import CommentsScreen from './screens/CommentsScreen';
import AlbumsScreen from './screens/AlbumsScreen';
import PhotosScreen from './screens/PhotosScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="Comments" component={CommentsScreen} />
        <Stack.Screen name="Albums" component={AlbumsScreen} />
        <Stack.Screen name="Photos" component={PhotosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

