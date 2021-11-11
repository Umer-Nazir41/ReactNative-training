import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import InterceptorScreen from '../screen/Interceptor/Interceptor';
import InterceptorLogin from '../screen/Interceptor/InterceptorLogin';
import InterceptorUploadContact from '../screen/Interceptor/InterceptorContact';

const InterceptorStack = createStackNavigator();

function MyInterceptorStack() {
  return (
    <InterceptorStack.Navigator initialRouteName="InterceptorLogin">
      <InterceptorStack.Screen
        name="InterceptorScreen"
        component={InterceptorScreen}
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

export default function APP() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
