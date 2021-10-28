import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import screens from '../screen/Index';

const {
  SignIn,
  ForgetPassword,
  CreateAccount,
  Home,
  Profile,
  Contact,
  UserPost,
  UserProfile,
  UserDetails,
} = screens;

const AuthStack = createStackNavigator();
const mainStack = createStackNavigator();
const DrawerBar = createDrawerNavigator();
const userStack = createStackNavigator();

function MyStack() {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{headerShown: true, title: 'Reset Password'}}
      />
    </AuthStack.Navigator>
  );
}

function Drawer() {
  return (
    <DrawerBar.Navigator
      drawerType="front"
      initialRouteName="MyStack"
      screenOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 10},
      }}>
      <DrawerBar.Screen
        name="Main Menu"
        component={Home}
        options={{headerTitleAlign: 'center'}}
      />
      <DrawerBar.Screen
        name="Profile"
        component={Profile}
        options={{headerTitleAlign: 'center'}}
      />
      <DrawerBar.Screen
        name="Contacts"
        component={Contact}
        options={{headerTitleAlign: 'center'}}
      />
    </DrawerBar.Navigator>
  );
}

function UserStack() {
  return (
    <userStack.Navigator initialRouteName="UserPost">
      <userStack.Screen
        name="Posts"
        component={UserPost}
        //options={{headerShown: false}}
      />
      <userStack.Screen
        name="UserProfile"
        component={UserProfile}
        //options={{headerShown: false}}
      />
      <userStack.Screen
        name="UserDetails"
        component={UserDetails}
        //options={{headerShown: true, title: 'Reset Password'}}
      />
    </userStack.Navigator>
  );
}

function MainStack() {
  return (
    <mainStack.Navigator initialRouteName="Auth">
      <mainStack.Screen
        name="Auth"
        component={MyStack}
        options={{headerShown: false}}
      />
      <mainStack.Screen
        name="Home"
        component={Drawer}
        options={{headerShown: false}}
      />
      <mainStack.Screen
        name="UserPost"
        component={UserStack}
        options={{headerShown: false}}
      />
    </mainStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
