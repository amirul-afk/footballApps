import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PublicRoute from './PublicRoute';


function Routes() {
  const Stack = createStackNavigator();
  const routesLists = [
    ...PublicRoute
  ]
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ProfileScreen" 
      >
        {
          routesLists.map((each,key)=>( 
            <Stack.Screen 
            key={key}
            {...each}
            />
          ))
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
