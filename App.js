import React from 'react';
import Home from './screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ToDoList from './screens/ToDoList'
import EditList from './screens/EditList'
import Colors from './constans/Colors'

let Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Fire App' component={ Home } />
        <Stack.Screen
          component={ ToDoList }
          name='ToDoList'
          options={({ route }) => {
            return({
              title: route.params.title,
              headerStyle: {
                backgroundColor: route.params.color
              },
              headerTintColor: 'white',
            })
          }}
        />
        <Stack.Screen
          name='EditList'
          component={ EditList }
          options={({ route }) => {
            return({
              title: route.params.title ? `Edit ${ route.params.title } list` : 'Create new List',
              headerStyle: {
                backgroundColor: route.params.color || Colors.blue
              },
              headerTintColor: 'white'
            })
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


