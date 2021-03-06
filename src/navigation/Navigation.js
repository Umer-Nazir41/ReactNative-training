import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import screens from '../screen/Index';
import {Icon} from 'react-native-elements';
import strings from '../localization/LocalizedStrings';

const {
  SignIn,
  ForgetPassword,
  CreateAccount,
  Home,
  Redux,
  Map,
  UserPost,
  UserProfile,
  UserDetails,
  Splash,
  ContactPage,
  Camera,
  InterceptorSignup,
  InterceptorLogin,
  InterceptorUploadContact,
  Crud,
} = screens;

//CREATE STACKS FOR SCREENS
const AuthStack = createStackNavigator();
const mainStack = createStackNavigator();
const DrawerBar = createDrawerNavigator();
const userStack = createStackNavigator();
const contactStack = createBottomTabNavigator();
const InterceptorStack = createStackNavigator();

//AUTH STACK
function MyStack() {
  return (
    <AuthStack.Navigator initialRouteName="Splash">
      <AuthStack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{headerShown: false, title: `${strings.CREATE_ACCOUNT}`}}
      />
      <AuthStack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{headerShown: true, title: `${strings.RESET_PASSWORD}`}}
      />
    </AuthStack.Navigator>
  );
}

function ContactStack() {
  return (
    <contactStack.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName;
          if (route.name === 'Dialer') {
            iconName = 'call';
          } else if (route.name === 'Camera') {
            iconName = 'camera';
          }
          return <Icon name={iconName} />;
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        style: {
          shadowOffset: 0,
          elevation: 0,
        },
        initialRouteName: 'Dialer',
        unmountOnBlur: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#000',
        tabBarActiveBackgroundColor: '#181819',
        tabBarInactiveBackgroundColor: '#313035',
      })}>
      <contactStack.Screen
        name="Dialer"
        component={ContactPage}
        options={{headerShown: false, title: strings.CALL}}
      />
      <contactStack.Screen
        name="Camera"
        component={Camera}
        options={{headerShown: false, title: strings.CAMERA}}
      />
    </contactStack.Navigator>
  );
}

function MyInterceptorStack() {
  return (
    <InterceptorStack.Navigator initialRouteName="InterceptorLogin">
      <InterceptorStack.Screen
        name="InterceptorSignup"
        component={InterceptorSignup}
        options={{headerShown: false}}
      />
      <InterceptorStack.Screen
        name="InterceptorLogin"
        component={InterceptorLogin}
        options={{headerShown: false}}
      />
      <InterceptorStack.Screen
        name="InterceptorUploadContact"
        component={InterceptorUploadContact}
        options={{headerShown: false}}
      />
    </InterceptorStack.Navigator>
  );
}

//STACK FOR DRAWER
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
        options={{
          headerTitleAlign: 'center',
          title: `${strings.MAIN_MENU}`,
        }}
      />
      <DrawerBar.Screen
        name="Redux"
        component={Redux}
        options={{headerTitleAlign: 'center', title: `${strings.REDUX}`}}
      />
      <DrawerBar.Screen
        name="Map"
        component={Map}
        options={{headerTitleAlign: 'center', title: `${strings.MAP}`}}
      />
      <DrawerBar.Screen
        name="Contacts"
        component={ContactStack}
        options={{
          headerTitleAlign: 'center',
          title: '',
          drawerLabel: `${strings.DIALER}`,
        }}
      />
      <DrawerBar.Screen
        name="Interceptor"
        component={MyInterceptorStack}
        options={{headerTitleAlign: 'center', title: `${strings.INTERCEPTOR}`}}
      />
      <DrawerBar.Screen
        name="Crud"
        component={Crud}
        options={{headerTitleAlign: 'center', title: `${strings.CRUD}`}}
      />
    </DrawerBar.Navigator>
  );
}

//STACK FOR API's PAGES
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

//MAIN STACK TO COMBINE ALL STACK
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
